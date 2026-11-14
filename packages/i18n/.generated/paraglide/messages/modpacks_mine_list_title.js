/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mine_List_TitleInputs */

const en_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your modpacks`)
};

const es_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus modpacks`)
};

const de_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Modpacks`)
};

const fr_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos modpacks`)
};

const it_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi modpack`)
};

const nl_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw modpacks`)
};

const pl_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje modpacki`)
};

const pt_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus modpacks`)
};

const ru_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши модпаки`)
};

const sv_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina modpaket`)
};

const tr_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketlerin`)
};

const zh_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的整合包`)
};

const ja_modpacks_mine_list_title = /** @type {(inputs: Modpacks_Mine_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの Modパック`)
};

/**
* | output |
* | --- |
* | "Your modpacks" |
*
* @param {Modpacks_Mine_List_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mine_list_title = /** @type {((inputs?: Modpacks_Mine_List_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mine_List_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mine_list_title(inputs)
	if (locale === "de") return de_modpacks_mine_list_title(inputs)
	if (locale === "fr") return fr_modpacks_mine_list_title(inputs)
	if (locale === "it") return it_modpacks_mine_list_title(inputs)
	if (locale === "nl") return nl_modpacks_mine_list_title(inputs)
	if (locale === "pl") return pl_modpacks_mine_list_title(inputs)
	if (locale === "pt") return pt_modpacks_mine_list_title(inputs)
	if (locale === "ru") return ru_modpacks_mine_list_title(inputs)
	if (locale === "sv") return sv_modpacks_mine_list_title(inputs)
	if (locale === "tr") return tr_modpacks_mine_list_title(inputs)
	if (locale === "zh") return zh_modpacks_mine_list_title(inputs)
	if (locale === "ja") return ja_modpacks_mine_list_title(inputs)
	return en_modpacks_mine_list_title(inputs)
});
