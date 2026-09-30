/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_TitleInputs */

const en_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit staff picks`)
};

const es_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits destacados por el equipo`)
};

const de_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit-Empfehlungen des Teams`)
};

const fr_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits choisis par l’équipe`)
};

const it_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit scelti dallo staff`)
};

const nl_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits gekozen door het team`)
};

const pl_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy wybrane przez ekipę`)
};

const pt_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits escolhidos pela equipe`)
};

const ru_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы — выбор команды`)
};

const sv_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit utvalda av teamet`)
};

const tr_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin seçtiği kitler`)
};

const zh_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选合集`)
};

const ja_admin_kit_picks_title = /** @type {(inputs: Admin_Kit_Picks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフおすすめキット`)
};

/**
* | output |
* | --- |
* | "Kit staff picks" |
*
* @param {Admin_Kit_Picks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_title = /** @type {((inputs?: Admin_Kit_Picks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_title(inputs)
	if (locale === "de") return de_admin_kit_picks_title(inputs)
	if (locale === "fr") return fr_admin_kit_picks_title(inputs)
	if (locale === "it") return it_admin_kit_picks_title(inputs)
	if (locale === "nl") return nl_admin_kit_picks_title(inputs)
	if (locale === "pl") return pl_admin_kit_picks_title(inputs)
	if (locale === "pt") return pt_admin_kit_picks_title(inputs)
	if (locale === "ru") return ru_admin_kit_picks_title(inputs)
	if (locale === "sv") return sv_admin_kit_picks_title(inputs)
	if (locale === "tr") return tr_admin_kit_picks_title(inputs)
	if (locale === "zh") return zh_admin_kit_picks_title(inputs)
	if (locale === "ja") return ja_admin_kit_picks_title(inputs)
	return en_admin_kit_picks_title(inputs)
});
