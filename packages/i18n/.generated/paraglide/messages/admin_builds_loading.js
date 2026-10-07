/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_LoadingInputs */

const en_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading game builds`)
};

const es_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando las builds del juego`)
};

const de_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Builds werden geladen`)
};

const fr_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des builds du jeu`)
};

const it_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento delle build del gioco`)
};

const nl_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamebuilds laden`)
};

const pl_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie buildów gry`)
};

const pt_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando os builds do jogo`)
};

const ru_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка сборок игры`)
};

const sv_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in spelbyggen`)
};

const tr_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri yükleniyor`)
};

const zh_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载游戏版本`)
};

const ja_admin_builds_loading = /** @type {(inputs: Admin_Builds_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルドを読み込み中`)
};

/**
* | output |
* | --- |
* | "Loading game builds" |
*
* @param {Admin_Builds_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_loading = /** @type {((inputs?: Admin_Builds_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_loading(inputs)
	if (locale === "de") return de_admin_builds_loading(inputs)
	if (locale === "fr") return fr_admin_builds_loading(inputs)
	if (locale === "it") return it_admin_builds_loading(inputs)
	if (locale === "nl") return nl_admin_builds_loading(inputs)
	if (locale === "pl") return pl_admin_builds_loading(inputs)
	if (locale === "pt") return pt_admin_builds_loading(inputs)
	if (locale === "ru") return ru_admin_builds_loading(inputs)
	if (locale === "sv") return sv_admin_builds_loading(inputs)
	if (locale === "tr") return tr_admin_builds_loading(inputs)
	if (locale === "zh") return zh_admin_builds_loading(inputs)
	if (locale === "ja") return ja_admin_builds_loading(inputs)
	return en_admin_builds_loading(inputs)
});
