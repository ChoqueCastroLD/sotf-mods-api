/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_No_Match_TitleInputs */

const en_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods match`)
};

const es_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún mod coincide`)
};

const de_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod passt`)
};

const fr_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod ne correspond`)
};

const it_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod corrisponde`)
};

const nl_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mod past`)
};

const pl_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden mod nie pasuje`)
};

const pt_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod corresponde`)
};

const ru_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет подходящих модов`)
};

const sv_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga moddar matchar`)
};

const tr_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen mod yok`)
};

const zh_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的模组`)
};

const ja_me_no_match_title = /** @type {(inputs: Me_No_Match_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致する MOD はありません`)
};

/**
* | output |
* | --- |
* | "No mods match" |
*
* @param {Me_No_Match_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_no_match_title = /** @type {((inputs?: Me_No_Match_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_No_Match_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_no_match_title(inputs)
	if (locale === "de") return de_me_no_match_title(inputs)
	if (locale === "fr") return fr_me_no_match_title(inputs)
	if (locale === "it") return it_me_no_match_title(inputs)
	if (locale === "nl") return nl_me_no_match_title(inputs)
	if (locale === "pl") return pl_me_no_match_title(inputs)
	if (locale === "pt") return pt_me_no_match_title(inputs)
	if (locale === "ru") return ru_me_no_match_title(inputs)
	if (locale === "sv") return sv_me_no_match_title(inputs)
	if (locale === "tr") return tr_me_no_match_title(inputs)
	if (locale === "zh") return zh_me_no_match_title(inputs)
	if (locale === "ja") return ja_me_no_match_title(inputs)
	return en_me_no_match_title(inputs)
});
