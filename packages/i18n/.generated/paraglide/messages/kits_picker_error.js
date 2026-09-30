/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_ErrorInputs */

const en_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search failed. Keep typing to try again.`)
};

const es_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La búsqueda ha fallado. Sigue escribiendo para reintentarlo.`)
};

const de_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Suche ist fehlgeschlagen. Tipp weiter, um es erneut zu versuchen.`)
};

const fr_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche a échoué. Continuez à taper pour réessayer.`)
};

const it_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca non riuscita. Continua a scrivere per riprovare.`)
};

const nl_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken mislukt. Typ verder om het opnieuw te proberen.`)
};

const pl_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie nie powiodło się. Pisz dalej, aby spróbować ponownie.`)
};

const pt_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A busca falhou. Continue digitando para tentar de novo.`)
};

const ru_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск не удался. Продолжайте вводить, чтобы повторить.`)
};

const sv_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökningen misslyckades. Fortsätt skriva för att försöka igen.`)
};

const tr_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama başarısız. Tekrar denemek için yazmaya devam et.`)
};

const zh_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索失败，继续输入即可重试。`)
};

const ja_kits_picker_error = /** @type {(inputs: Kits_Picker_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索に失敗しました。入力を続けると再試行します。`)
};

/**
* | output |
* | --- |
* | "Search failed. Keep typing to try again." |
*
* @param {Kits_Picker_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_error = /** @type {((inputs?: Kits_Picker_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_error(inputs)
	if (locale === "de") return de_kits_picker_error(inputs)
	if (locale === "fr") return fr_kits_picker_error(inputs)
	if (locale === "it") return it_kits_picker_error(inputs)
	if (locale === "nl") return nl_kits_picker_error(inputs)
	if (locale === "pl") return pl_kits_picker_error(inputs)
	if (locale === "pt") return pt_kits_picker_error(inputs)
	if (locale === "ru") return ru_kits_picker_error(inputs)
	if (locale === "sv") return sv_kits_picker_error(inputs)
	if (locale === "tr") return tr_kits_picker_error(inputs)
	if (locale === "zh") return zh_kits_picker_error(inputs)
	if (locale === "ja") return ja_kits_picker_error(inputs)
	return en_kits_picker_error(inputs)
});
