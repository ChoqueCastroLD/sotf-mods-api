/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_More_CommunityInputs */

const en_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const es_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidad`)
};

const de_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const fr_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communauté`)
};

const it_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const nl_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const pl_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Społeczność`)
};

const pt_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidade`)
};

const ru_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщество`)
};

const sv_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const tr_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk`)
};

const zh_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区`)
};

const ja_shell_more_community = /** @type {(inputs: Shell_More_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティ`)
};

/**
* | output |
* | --- |
* | "Community" |
*
* @param {Shell_More_CommunityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_more_community = /** @type {((inputs?: Shell_More_CommunityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_More_CommunityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_more_community(inputs)
	if (locale === "de") return de_shell_more_community(inputs)
	if (locale === "fr") return fr_shell_more_community(inputs)
	if (locale === "it") return it_shell_more_community(inputs)
	if (locale === "nl") return nl_shell_more_community(inputs)
	if (locale === "pl") return pl_shell_more_community(inputs)
	if (locale === "pt") return pt_shell_more_community(inputs)
	if (locale === "ru") return ru_shell_more_community(inputs)
	if (locale === "sv") return sv_shell_more_community(inputs)
	if (locale === "tr") return tr_shell_more_community(inputs)
	if (locale === "zh") return zh_shell_more_community(inputs)
	if (locale === "ja") return ja_shell_more_community(inputs)
	return en_shell_more_community(inputs)
});
