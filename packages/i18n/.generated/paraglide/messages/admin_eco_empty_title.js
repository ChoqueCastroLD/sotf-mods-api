/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Empty_TitleInputs */

const en_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to map yet`)
};

const es_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay nada que mapear`)
};

const de_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts zuzuordnen`)
};

const fr_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à associer pour l’instant`)
};

const it_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente da mappare`)
};

const nl_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets om in kaart te brengen`)
};

const pl_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nie ma czego przypisać`)
};

const pt_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada para mapear ainda`)
};

const ru_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нечего сопоставлять`)
};

const sv_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att koppla ihop än`)
};

const tr_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz eşlenecek bir şey yok`)
};

const zh_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时没有可对应的内容`)
};

const ja_admin_eco_empty_title = /** @type {(inputs: Admin_Eco_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ対応付けるものがありません`)
};

/**
* | output |
* | --- |
* | "Nothing to map yet" |
*
* @param {Admin_Eco_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_empty_title = /** @type {((inputs?: Admin_Eco_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_empty_title(inputs)
	if (locale === "de") return de_admin_eco_empty_title(inputs)
	if (locale === "fr") return fr_admin_eco_empty_title(inputs)
	if (locale === "it") return it_admin_eco_empty_title(inputs)
	if (locale === "nl") return nl_admin_eco_empty_title(inputs)
	if (locale === "pl") return pl_admin_eco_empty_title(inputs)
	if (locale === "pt") return pt_admin_eco_empty_title(inputs)
	if (locale === "ru") return ru_admin_eco_empty_title(inputs)
	if (locale === "sv") return sv_admin_eco_empty_title(inputs)
	if (locale === "tr") return tr_admin_eco_empty_title(inputs)
	if (locale === "zh") return zh_admin_eco_empty_title(inputs)
	if (locale === "ja") return ja_admin_eco_empty_title(inputs)
	return en_admin_eco_empty_title(inputs)
});
