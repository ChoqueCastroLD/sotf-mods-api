/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Empty_BuildsInputs */

const en_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register a game build first.`)
};

const es_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra primero una build del juego.`)
};

const de_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registriere zuerst einen Spiel-Build.`)
};

const fr_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez d’abord un build du jeu.`)
};

const it_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra prima una build del gioco.`)
};

const nl_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreer eerst een gamebuild.`)
};

const pl_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw zarejestruj build gry.`)
};

const pt_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registre primeiro um build do jogo.`)
};

const ru_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала добавьте сборку игры.`)
};

const sv_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera först ett spelbygge.`)
};

const tr_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce bir oyun sürümü kaydet.`)
};

const zh_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先登记一个游戏版本。`)
};

const ja_admin_eco_empty_builds = /** @type {(inputs: Admin_Eco_Empty_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にゲームビルドを登録してください。`)
};

/**
* | output |
* | --- |
* | "Register a game build first." |
*
* @param {Admin_Eco_Empty_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_empty_builds = /** @type {((inputs?: Admin_Eco_Empty_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Empty_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_empty_builds(inputs)
	if (locale === "de") return de_admin_eco_empty_builds(inputs)
	if (locale === "fr") return fr_admin_eco_empty_builds(inputs)
	if (locale === "it") return it_admin_eco_empty_builds(inputs)
	if (locale === "nl") return nl_admin_eco_empty_builds(inputs)
	if (locale === "pl") return pl_admin_eco_empty_builds(inputs)
	if (locale === "pt") return pt_admin_eco_empty_builds(inputs)
	if (locale === "ru") return ru_admin_eco_empty_builds(inputs)
	if (locale === "sv") return sv_admin_eco_empty_builds(inputs)
	if (locale === "tr") return tr_admin_eco_empty_builds(inputs)
	if (locale === "zh") return zh_admin_eco_empty_builds(inputs)
	if (locale === "ja") return ja_admin_eco_empty_builds(inputs)
	return en_admin_eco_empty_builds(inputs)
});
