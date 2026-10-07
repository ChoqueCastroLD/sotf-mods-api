/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_DescriptionInputs */

const en_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest game versions. Exactly one is current. Steam is checked every 30 minutes for a new build.`)
};

const es_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las versiones del juego Sons of the Forest. Exactamente una es la actual. Steam se consulta cada 30 minutos por si hay una build nueva.`)
};

const de_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Spielversionen von Sons of the Forest. Genau eine ist aktuell. Steam wird alle 30 Minuten auf einen neuen Build geprüft.`)
};

const fr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les versions du jeu Sons of the Forest. Une seule est la version actuelle. Steam est consulté toutes les 30 minutes pour détecter un nouveau build.`)
};

const it_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le versioni del gioco Sons of the Forest. Esattamente una è quella attuale. Steam viene controllato ogni 30 minuti in cerca di una nuova build.`)
};

const nl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De spelversies van Sons of the Forest. Precies één is de huidige. Steam wordt elke 30 minuten gecontroleerd op een nieuwe build.`)
};

const pl_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje gry Sons of the Forest. Dokładnie jedna jest aktualna. Steam jest sprawdzany co 30 minut pod kątem nowego buildu.`)
};

const pt_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As versões do jogo Sons of the Forest. Exatamente uma é a atual. A Steam é consultada a cada 30 minutos em busca de um build novo.`)
};

const ru_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии игры Sons of the Forest. Текущая только одна. Steam проверяется каждые 30 минут: нет ли новой сборки.`)
};

const sv_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversionerna av Sons of the Forest. Exakt en är aktuell. Steam kontrolleras var 30:e minut efter nya byggen.`)
};

const tr_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest oyun sürümleri. Tam olarak biri günceldir. Steam, yeni sürüm için her 30 dakikada bir kontrol edilir.`)
};

const zh_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`《森林之子》的游戏版本。有且只有一个是当前版本。每 30 分钟检查一次 Steam 是否有新版本。`)
};

const ja_admin_builds_description = /** @type {(inputs: Admin_Builds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest のゲームバージョンです。現在のバージョンは必ず 1 つです。Steam を 30 分ごとに確認し、新しいビルドを検出します。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest game versions. Exactly one is current. Steam is checked every 30 minutes for a new build." |
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
