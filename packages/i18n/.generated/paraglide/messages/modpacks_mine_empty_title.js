/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mine_Empty_TitleInputs */

const en_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no modpacks yet`)
};

const es_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes modpacks`)
};

const de_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keine Modpacks`)
};

const fr_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n’avez pas encore de modpack`)
};

const it_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora modpack`)
};

const nl_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen modpacks`)
};

const pl_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz jeszcze modpacków`)
};

const pt_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não tem modpacks`)
};

const ru_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас пока нет модпаков`)
};

const sv_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga modpaket än`)
};

const tr_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz mod paketin yok`)
};

const zh_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有整合包`)
};

const ja_modpacks_mine_empty_title = /** @type {(inputs: Modpacks_Mine_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックはまだありません`)
};

/**
* | output |
* | --- |
* | "You have no modpacks yet" |
*
* @param {Modpacks_Mine_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mine_empty_title = /** @type {((inputs?: Modpacks_Mine_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mine_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mine_empty_title(inputs)
	if (locale === "de") return de_modpacks_mine_empty_title(inputs)
	if (locale === "fr") return fr_modpacks_mine_empty_title(inputs)
	if (locale === "it") return it_modpacks_mine_empty_title(inputs)
	if (locale === "nl") return nl_modpacks_mine_empty_title(inputs)
	if (locale === "pl") return pl_modpacks_mine_empty_title(inputs)
	if (locale === "pt") return pt_modpacks_mine_empty_title(inputs)
	if (locale === "ru") return ru_modpacks_mine_empty_title(inputs)
	if (locale === "sv") return sv_modpacks_mine_empty_title(inputs)
	if (locale === "tr") return tr_modpacks_mine_empty_title(inputs)
	if (locale === "zh") return zh_modpacks_mine_empty_title(inputs)
	if (locale === "ja") return ja_modpacks_mine_empty_title(inputs)
	return en_modpacks_mine_empty_title(inputs)
});
