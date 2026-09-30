/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_TitleInputs */

const en_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game builds`)
};

const es_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds del juego`)
};

const de_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Builds`)
};

const fr_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds du jeu`)
};

const it_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco`)
};

const nl_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamebuilds`)
};

const pl_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy gry`)
};

const pt_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds do jogo`)
};

const ru_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборки игры`)
};

const sv_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelbyggen`)
};

const tr_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri`)
};

const zh_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_admin_builds_title = /** @type {(inputs: Admin_Builds_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド`)
};

/**
* | output |
* | --- |
* | "Game builds" |
*
* @param {Admin_Builds_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_title = /** @type {((inputs?: Admin_Builds_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_title(inputs)
	if (locale === "de") return de_admin_builds_title(inputs)
	if (locale === "fr") return fr_admin_builds_title(inputs)
	if (locale === "it") return it_admin_builds_title(inputs)
	if (locale === "nl") return nl_admin_builds_title(inputs)
	if (locale === "pl") return pl_admin_builds_title(inputs)
	if (locale === "pt") return pt_admin_builds_title(inputs)
	if (locale === "ru") return ru_admin_builds_title(inputs)
	if (locale === "sv") return sv_admin_builds_title(inputs)
	if (locale === "tr") return tr_admin_builds_title(inputs)
	if (locale === "zh") return zh_admin_builds_title(inputs)
	if (locale === "ja") return ja_admin_builds_title(inputs)
	return en_admin_builds_title(inputs)
});
