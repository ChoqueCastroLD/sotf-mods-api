/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_Search_HintInputs */

const en_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press Enter to see all results.`)
};

const es_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa Enter para ver todos los resultados.`)
};

const de_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drücke Enter, um alle Ergebnisse zu sehen.`)
};

const fr_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appuyez sur Entrée pour voir tous les résultats.`)
};

const it_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi Invio per vedere tutti i risultati.`)
};

const nl_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Druk op Enter voor alle resultaten.`)
};

const pl_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naciśnij Enter, aby zobaczyć wszystkie wyniki.`)
};

const pt_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima Enter para ver todos os resultados.`)
};

const ru_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите Enter, чтобы увидеть все результаты.`)
};

const sv_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck Enter för att se alla resultat.`)
};

const tr_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sonuçlar için Enter’a basın.`)
};

const zh_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Enter 查看全部结果。`)
};

const ja_cmdk_preview_search_hint = /** @type {(inputs: Cmdk_Preview_Search_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter で全結果を表示します。`)
};

/**
* | output |
* | --- |
* | "Press Enter to see all results." |
*
* @param {Cmdk_Preview_Search_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_search_hint = /** @type {((inputs?: Cmdk_Preview_Search_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_Search_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_search_hint(inputs)
	if (locale === "de") return de_cmdk_preview_search_hint(inputs)
	if (locale === "fr") return fr_cmdk_preview_search_hint(inputs)
	if (locale === "it") return it_cmdk_preview_search_hint(inputs)
	if (locale === "nl") return nl_cmdk_preview_search_hint(inputs)
	if (locale === "pl") return pl_cmdk_preview_search_hint(inputs)
	if (locale === "pt") return pt_cmdk_preview_search_hint(inputs)
	if (locale === "ru") return ru_cmdk_preview_search_hint(inputs)
	if (locale === "sv") return sv_cmdk_preview_search_hint(inputs)
	if (locale === "tr") return tr_cmdk_preview_search_hint(inputs)
	if (locale === "zh") return zh_cmdk_preview_search_hint(inputs)
	if (locale === "ja") return ja_cmdk_preview_search_hint(inputs)
	return en_cmdk_preview_search_hint(inputs)
});
