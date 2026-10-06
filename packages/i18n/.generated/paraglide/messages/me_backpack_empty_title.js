/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_Empty_TitleInputs */

const en_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are not following any mods`)
};

const es_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No sigues ningún mod`)
};

const de_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst noch keinem Mod`)
};

const fr_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne suivez aucun mod`)
};

const it_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non segui nessuna mod`)
};

const nl_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt geen mods`)
};

const pl_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie obserwujesz żadnych modów`)
};

const pt_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não segue nenhum mod`)
};

const ru_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы ни на что не подписаны`)
};

const sv_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inga moddar`)
};

const tr_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiçbir modu takip etmiyorsun`)
};

const zh_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有关注任何模组`)
};

const ja_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のMODはありません`)
};

/**
* | output |
* | --- |
* | "You are not following any mods" |
*
* @param {Me_Backpack_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_empty_title = /** @type {((inputs?: Me_Backpack_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_empty_title(inputs)
	if (locale === "de") return de_me_backpack_empty_title(inputs)
	if (locale === "fr") return fr_me_backpack_empty_title(inputs)
	if (locale === "it") return it_me_backpack_empty_title(inputs)
	if (locale === "nl") return nl_me_backpack_empty_title(inputs)
	if (locale === "pl") return pl_me_backpack_empty_title(inputs)
	if (locale === "pt") return pt_me_backpack_empty_title(inputs)
	if (locale === "ru") return ru_me_backpack_empty_title(inputs)
	if (locale === "sv") return sv_me_backpack_empty_title(inputs)
	if (locale === "tr") return tr_me_backpack_empty_title(inputs)
	if (locale === "zh") return zh_me_backpack_empty_title(inputs)
	if (locale === "ja") return ja_me_backpack_empty_title(inputs)
	return en_me_backpack_empty_title(inputs)
});
