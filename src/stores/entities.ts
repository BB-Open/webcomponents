import { defineStore } from "pinia";
import {RemovableRef, useStorage} from '@vueuse/core'
export const SOLR_ROULETTE_URI:string='https://flask.datenadler.de/solr_roulette'

type StateEntities = {
    input_text: RemovableRef<string>
    solr_roulette: any
}

export const useEntityStore = defineStore({
        id: 'entities',
        state:():StateEntities => ({
            input_text: useStorage('input_:text',''),
            solr_roulette: {}
        }),
        actions: {
            async query_solr(url:string, data:string) {
                let res;
                try {
                    res = await fetch(url, {
                        method: 'POST',
                        body: data,
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            'Accept': 'application/json',
                        }
                    })
                } catch (error) {
                    console.log('Error', error);
                }
                try {
                    if (res) {
                        return res.json()
                    }
                } catch (error) {
                    console.log('Error', error);
                }
            },
            async get_roulette() {
                let data = {
                    'random_int': Math.random() * 10000
                }
                let roulette_res =  await this.query_solr(SOLR_ROULETTE_URI, JSON.stringify(data))
                this.solr_roulette = roulette_res.response.docs[0];
                console.log(roulette_res)
                let chars_title = 100
                let chars_desc = 250

                if (this.solr_roulette.dct_title.length > chars_title) {
                    this.solr_roulette.dct_title = this.solr_roulette.dct_title.slice(0, chars_title) + '...'
                }

                if (this.solr_roulette.dct_description[0].length > chars_desc) {
                    this.solr_roulette.dct_description[0] = this.solr_roulette.dct_description[0].slice(0, chars_desc) + '...'
                }

            }
        },
    getters: {
            roulette: state => state.solr_roulette,
    }
    })