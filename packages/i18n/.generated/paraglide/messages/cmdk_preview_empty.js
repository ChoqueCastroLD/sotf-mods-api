/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_EmptyInputs */

const en_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move through the results to preview them here.`)
};

const es_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muévete por los resultados para verlos aquí.`)
};

const de_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geh die Ergebnisse durch, um sie hier in der Vorschau zu sehen.`)
};

const fr_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourez les résultats pour les prévisualiser ici.`)
};

const it_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scorri i risultati per vederne l’anteprima qui.`)
};

const nl_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blader door de resultaten om ze hier te bekijken.`)
};

const pl_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź po wynikach, aby zobaczyć tu ich podgląd.`)
};

const pt_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Navegue pelos resultados para vê-los aqui.`)
};

const ru_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переходите по результатам, чтобы увидеть их здесь.`)
};

const sv_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå igenom resultaten för att förhandsvisa dem här.`)
};

const tr_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizlemek için sonuçlar arasında gezin.`)
};

const zh_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在结果间移动即可在此预览。`)
};

const ja_cmdk_preview_empty = /** @type {(inputs: Cmdk_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を移動すると、ここにプレビューが表示されます。`)
};

/**
* | output |
* | --- |
* | "Move through the results to preview them here." |
*
* @param {Cmdk_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_empty = /** @type {((inputs?: Cmdk_Preview_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_empty(inputs)
	if (locale === "de") return de_cmdk_preview_empty(inputs)
	if (locale === "fr") return fr_cmdk_preview_empty(inputs)
	if (locale === "it") return it_cmdk_preview_empty(inputs)
	if (locale === "nl") return nl_cmdk_preview_empty(inputs)
	if (locale === "pl") return pl_cmdk_preview_empty(inputs)
	if (locale === "pt") return pt_cmdk_preview_empty(inputs)
	if (locale === "ru") return ru_cmdk_preview_empty(inputs)
	if (locale === "sv") return sv_cmdk_preview_empty(inputs)
	if (locale === "tr") return tr_cmdk_preview_empty(inputs)
	if (locale === "zh") return zh_cmdk_preview_empty(inputs)
	if (locale === "ja") return ja_cmdk_preview_empty(inputs)
	return en_cmdk_preview_empty(inputs)
});
