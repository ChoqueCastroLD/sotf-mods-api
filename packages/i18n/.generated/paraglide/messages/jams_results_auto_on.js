/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Results_Auto_OnInputs */

const en_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results are computed and published when voting closes.`)
};

const es_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los resultados se calculan y publican al cerrar la votación.`)
};

const de_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ergebnisse werden berechnet und veröffentlicht, wenn die Abstimmung endet.`)
};

const fr_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les résultats sont calculés et publiés à la clôture du vote.`)
};

const it_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I risultati vengono calcolati e pubblicati alla chiusura del voto.`)
};

const nl_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten worden berekend en gepubliceerd zodra het stemmen sluit.`)
};

const pl_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki są liczone i publikowane po zakończeniu głosowania.`)
};

const pt_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os resultados são calculados e publicados quando a votação encerra.`)
};

const ru_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Итоги подсчитываются и публикуются, когда голосование закрывается.`)
};

const sv_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten räknas fram och publiceras när röstningen stänger.`)
};

const tr_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar, oylama kapandığında hesaplanır ve yayımlanır.`)
};

const zh_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票结束时会自动计算并发布结果。`)
};

const ja_jams_results_auto_on = /** @type {(inputs: Jams_Results_Auto_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票が終了すると、結果が自動で集計・公開されます。`)
};

/**
* | output |
* | --- |
* | "Results are computed and published when voting closes." |
*
* @param {Jams_Results_Auto_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_auto_on = /** @type {((inputs?: Jams_Results_Auto_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Auto_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_auto_on(inputs)
	if (locale === "de") return de_jams_results_auto_on(inputs)
	if (locale === "fr") return fr_jams_results_auto_on(inputs)
	if (locale === "it") return it_jams_results_auto_on(inputs)
	if (locale === "nl") return nl_jams_results_auto_on(inputs)
	if (locale === "pl") return pl_jams_results_auto_on(inputs)
	if (locale === "pt") return pt_jams_results_auto_on(inputs)
	if (locale === "ru") return ru_jams_results_auto_on(inputs)
	if (locale === "sv") return sv_jams_results_auto_on(inputs)
	if (locale === "tr") return tr_jams_results_auto_on(inputs)
	if (locale === "zh") return zh_jams_results_auto_on(inputs)
	if (locale === "ja") return ja_jams_results_auto_on(inputs)
	return en_jams_results_auto_on(inputs)
});
