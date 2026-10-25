/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_TaglineInputs */

const en_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods for Sons of the Forest and The Forest, made and shared by the community.`)
};

const es_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para Sons of the Forest y The Forest, creados y compartidos por la comunidad.`)
};

const de_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für Sons of the Forest und The Forest, von der Community erstellt und geteilt.`)
};

const fr_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods pour Sons of the Forest et The Forest, créés et partagés par la communauté.`)
};

const it_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per Sons of the Forest e The Forest, creati e condivisi dalla community.`)
};

const nl_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor Sons of the Forest en The Forest, gemaakt en gedeeld door de community.`)
};

const pl_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest i The Forest, tworzone i udostępniane przez społeczność.`)
};

const pt_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para Sons of the Forest e The Forest, criados e compartilhados pela comunidade.`)
};

const ru_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest и The Forest, созданные и опубликованные сообществом.`)
};

const sv_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods för Sons of the Forest och The Forest, skapade och delade av communityn.`)
};

const tr_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest ve The Forest için topluluk tarafından yapılan ve paylaşılan modlar.`)
};

const zh_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由社区制作并分享的 Sons of the Forest 与 The Forest 模组。`)
};

const ja_shell_footer_tagline = /** @type {(inputs: Shell_Footer_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティが作って共有する、Sons of the Forest と The Forest のMOD。`)
};

/**
* | output |
* | --- |
* | "Mods for Sons of the Forest and The Forest, made and shared by the community." |
*
* @param {Shell_Footer_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_tagline = /** @type {((inputs?: Shell_Footer_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_tagline(inputs)
	if (locale === "de") return de_shell_footer_tagline(inputs)
	if (locale === "fr") return fr_shell_footer_tagline(inputs)
	if (locale === "it") return it_shell_footer_tagline(inputs)
	if (locale === "nl") return nl_shell_footer_tagline(inputs)
	if (locale === "pl") return pl_shell_footer_tagline(inputs)
	if (locale === "pt") return pt_shell_footer_tagline(inputs)
	if (locale === "ru") return ru_shell_footer_tagline(inputs)
	if (locale === "sv") return sv_shell_footer_tagline(inputs)
	if (locale === "tr") return tr_shell_footer_tagline(inputs)
	if (locale === "zh") return zh_shell_footer_tagline(inputs)
	if (locale === "ja") return ja_shell_footer_tagline(inputs)
	return en_shell_footer_tagline(inputs)
});
