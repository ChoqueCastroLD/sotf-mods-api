/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ecosystem_DescriptionInputs */

const en_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader and RedManager releases and whether they work on each game build, as shown on the Patch Radar.`)
};

const es_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones de RedLoader y RedManager y si funcionan en cada build del juego, tal como se muestra en el Radar de parches.`)
};

const de_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen von RedLoader und RedManager und ob sie auf jedem Spiel-Build funktionieren, wie im Patch-Radar angezeigt.`)
};

const fr_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les versions de RedLoader et RedManager et leur fonctionnement sur chaque build du jeu, comme sur le Radar des patchs.`)
};

const it_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le versioni di RedLoader e RedManager e se funzionano su ogni build del gioco, come mostrato nel Radar delle patch.`)
};

const nl_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases van RedLoader en RedManager en of ze werken op elke gamebuild, zoals getoond op de Patchradar.`)
};

const pl_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydania RedLoadera i RedManagera i to, czy działają na każdym buildzie gry, tak jak na Radarze patchy.`)
};

const pt_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões do RedLoader e do RedManager e se funcionam em cada build do jogo, como aparece no Radar de patches.`)
};

const ru_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии RedLoader и RedManager и их работа на каждой сборке игры, как на Радаре патчей.`)
};

const sv_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner av RedLoader och RedManager och om de fungerar på varje spelbygge, som på Patchradarn.`)
};

const tr_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader ve RedManager sürümleri ve her oyun sürümünde çalışıp çalışmadıkları, Yama Radarı’nda göründüğü gibi.`)
};

const zh_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 和 RedManager 的各个版本及其在每个游戏版本上的运行情况，与补丁雷达中显示的一致。`)
};

const ja_admin_ecosystem_description = /** @type {(inputs: Admin_Ecosystem_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader と RedManager のリリースと、各ゲームビルドでの動作状況（パッチレーダーと同じ表示）。`)
};

/**
* | output |
* | --- |
* | "RedLoader and RedManager releases and whether they work on each game build, as shown on the Patch Radar." |
*
* @param {Admin_Ecosystem_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ecosystem_description = /** @type {((inputs?: Admin_Ecosystem_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ecosystem_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ecosystem_description(inputs)
	if (locale === "de") return de_admin_ecosystem_description(inputs)
	if (locale === "fr") return fr_admin_ecosystem_description(inputs)
	if (locale === "it") return it_admin_ecosystem_description(inputs)
	if (locale === "nl") return nl_admin_ecosystem_description(inputs)
	if (locale === "pl") return pl_admin_ecosystem_description(inputs)
	if (locale === "pt") return pt_admin_ecosystem_description(inputs)
	if (locale === "ru") return ru_admin_ecosystem_description(inputs)
	if (locale === "sv") return sv_admin_ecosystem_description(inputs)
	if (locale === "tr") return tr_admin_ecosystem_description(inputs)
	if (locale === "zh") return zh_admin_ecosystem_description(inputs)
	if (locale === "ja") return ja_admin_ecosystem_description(inputs)
	return en_admin_ecosystem_description(inputs)
});
