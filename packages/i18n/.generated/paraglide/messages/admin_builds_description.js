/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_DescriptionInputs */

const en_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Sons of the Forest game versions. Exactly one is current.`)
};

const es_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las versiones del juego Sons of the Forest. Exactamente una es la actual.`)
};

const de_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Spielversionen von Sons of the Forest. Genau eine ist aktuell.`)
};

const fr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les versions du jeu Sons of the Forest. Une seule est la version actuelle.`)
};

const it_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le versioni del gioco Sons of the Forest. Esattamente una è quella attuale.`)
};

const nl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De spelversies van Sons of the Forest. Precies één is de huidige.`)
};

const pl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje gry Sons of the Forest. Dokładnie jedna jest aktualna.`)
};

const pt_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As versões do jogo Sons of the Forest. Exatamente uma é a atual.`)
};

const ru_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии игры Sons of the Forest. Текущая только одна.`)
};

const sv_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversionerna av Sons of the Forest. Exakt en är aktuell.`)
};

const tr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest oyun sürümleri. Tam olarak biri günceldir.`)
};

const zh_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`《森林之子》的游戏版本。有且只有一个是当前版本。`)
};

const ja_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest のゲームバージョンです。現在のバージョンは必ず 1 つです。`)
};

/**
* | output |
* | --- |
* | "The Sons of the Forest game versions. Exactly one is current." |
*
* @param {Admin_Builds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_description = /** @type {((inputs?: Admin_Builds_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_description(inputs)
	if (locale === "de") return de_admin_builds_description(inputs)
	if (locale === "fr") return fr_admin_builds_description(inputs)
	if (locale === "it") return it_admin_builds_description(inputs)
	if (locale === "nl") return nl_admin_builds_description(inputs)
	if (locale === "pl") return pl_admin_builds_description(inputs)
	if (locale === "pt") return pt_admin_builds_description(inputs)
	if (locale === "ru") return ru_admin_builds_description(inputs)
	if (locale === "sv") return sv_admin_builds_description(inputs)
	if (locale === "tr") return tr_admin_builds_description(inputs)
	if (locale === "zh") return zh_admin_builds_description(inputs)
	if (locale === "ja") return ja_admin_builds_description(inputs)
	return en_admin_builds_description(inputs)
});
