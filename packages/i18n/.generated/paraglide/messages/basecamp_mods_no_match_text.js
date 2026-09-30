/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_No_Match_TextInputs */

const en_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try another name or status.`)
};

const es_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba con otro nombre u otro estado.`)
};

const de_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche einen anderen Namen oder Status.`)
};

const fr_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essaie un autre nom ou un autre état.`)
};

const it_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova un altro nome o un altro stato.`)
};

const nl_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer een andere naam of status.`)
};

const pl_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj innej nazwy lub stanu.`)
};

const pt_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente outro nome ou outro estado.`)
};

const ru_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте другое название или статус.`)
};

const sv_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova ett annat namn eller en annan status.`)
};

const tr_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir ad ya da durum dene.`)
};

const zh_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`试试其他名称或状态。`)
};

const ja_basecamp_mods_no_match_text = /** @type {(inputs: Basecamp_Mods_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別の名前や状態で試してください。`)
};

/**
* | output |
* | --- |
* | "Try another name or status." |
*
* @param {Basecamp_Mods_No_Match_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_no_match_text = /** @type {((inputs?: Basecamp_Mods_No_Match_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_No_Match_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_no_match_text(inputs)
	if (locale === "de") return de_basecamp_mods_no_match_text(inputs)
	if (locale === "fr") return fr_basecamp_mods_no_match_text(inputs)
	if (locale === "it") return it_basecamp_mods_no_match_text(inputs)
	if (locale === "nl") return nl_basecamp_mods_no_match_text(inputs)
	if (locale === "pl") return pl_basecamp_mods_no_match_text(inputs)
	if (locale === "pt") return pt_basecamp_mods_no_match_text(inputs)
	if (locale === "ru") return ru_basecamp_mods_no_match_text(inputs)
	if (locale === "sv") return sv_basecamp_mods_no_match_text(inputs)
	if (locale === "tr") return tr_basecamp_mods_no_match_text(inputs)
	if (locale === "zh") return zh_basecamp_mods_no_match_text(inputs)
	if (locale === "ja") return ja_basecamp_mods_no_match_text(inputs)
	return en_basecamp_mods_no_match_text(inputs)
});
