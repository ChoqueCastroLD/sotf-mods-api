/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Empty_TitleInputs */

const en_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No game builds yet`)
};

const es_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay builds del juego`)
};

const de_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Spiel-Builds`)
};

const fr_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build du jeu pour l’instant`)
};

const it_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna build del gioco`)
};

const nl_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen gamebuilds`)
};

const pl_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze buildów gry`)
};

const pt_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há builds do jogo`)
};

const ru_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборок игры пока нет`)
};

const sv_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga spelbyggen än`)
};

const tr_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz oyun sürümü yok`)
};

const zh_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有游戏版本`)
};

const ja_admin_builds_empty_title = /** @type {(inputs: Admin_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルドはまだありません`)
};

/**
* | output |
* | --- |
* | "No game builds yet" |
*
* @param {Admin_Builds_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_empty_title = /** @type {((inputs?: Admin_Builds_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_empty_title(inputs)
	if (locale === "de") return de_admin_builds_empty_title(inputs)
	if (locale === "fr") return fr_admin_builds_empty_title(inputs)
	if (locale === "it") return it_admin_builds_empty_title(inputs)
	if (locale === "nl") return nl_admin_builds_empty_title(inputs)
	if (locale === "pl") return pl_admin_builds_empty_title(inputs)
	if (locale === "pt") return pt_admin_builds_empty_title(inputs)
	if (locale === "ru") return ru_admin_builds_empty_title(inputs)
	if (locale === "sv") return sv_admin_builds_empty_title(inputs)
	if (locale === "tr") return tr_admin_builds_empty_title(inputs)
	if (locale === "zh") return zh_admin_builds_empty_title(inputs)
	if (locale === "ja") return ja_admin_builds_empty_title(inputs)
	return en_admin_builds_empty_title(inputs)
});
