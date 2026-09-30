/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Hub_Intro_Unknown_TitleInputs */

const en_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The current hub intro can’t be shown`)
};

const es_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede mostrar la introducción actual del hub`)
};

const de_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die aktuelle Hub-Einleitung kann nicht angezeigt werden`)
};

const fr_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’introduction actuelle du hub ne peut pas être affichée`)
};

const it_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile mostrare l’introduzione attuale dell’hub`)
};

const nl_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De huidige hub-intro kan niet worden getoond`)
};

const pl_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można pokazać obecnego wstępu huba`)
};

const pt_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é possível mostrar a introdução atual do hub`)
};

const ru_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущее вступление хаба показать нельзя`)
};

const sv_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hubbens nuvarande intro kan inte visas`)
};

const tr_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut merkez girişi gösterilemiyor`)
};

const zh_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法显示当前的专题页简介`)
};

const ja_admin_tax_hub_intro_unknown_title = /** @type {(inputs: Admin_Tax_Hub_Intro_Unknown_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のハブの紹介文を表示できません`)
};

/**
* | output |
* | --- |
* | "The current hub intro can’t be shown" |
*
* @param {Admin_Tax_Hub_Intro_Unknown_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_hub_intro_unknown_title = /** @type {((inputs?: Admin_Tax_Hub_Intro_Unknown_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Hub_Intro_Unknown_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "de") return de_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "fr") return fr_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "it") return it_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "nl") return nl_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "pl") return pl_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "pt") return pt_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "ru") return ru_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "sv") return sv_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "tr") return tr_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "zh") return zh_admin_tax_hub_intro_unknown_title(inputs)
	if (locale === "ja") return ja_admin_tax_hub_intro_unknown_title(inputs)
	return en_admin_tax_hub_intro_unknown_title(inputs)
});
