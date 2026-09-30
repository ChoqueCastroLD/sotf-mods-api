/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_MentionsInputs */

const en_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`People to mention`)
};

const es_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personas para mencionar`)
};

const de_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personen zum Erwähnen`)
};

const fr_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personnes à mentionner`)
};

const it_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Persone da menzionare`)
};

const nl_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensen om te noemen`)
};

const pl_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osoby do wspomnienia`)
};

const pt_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pessoas para mencionar`)
};

const ru_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кого упомянуть`)
};

const sv_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personer att nämna`)
};

const tr_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bahsedilecek kişiler`)
};

const zh_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可提及的人`)
};

const ja_social_editor_mentions = /** @type {(inputs: Social_Editor_MentionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンションする相手`)
};

/**
* | output |
* | --- |
* | "People to mention" |
*
* @param {Social_Editor_MentionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_mentions = /** @type {((inputs?: Social_Editor_MentionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_MentionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_mentions(inputs)
	if (locale === "de") return de_social_editor_mentions(inputs)
	if (locale === "fr") return fr_social_editor_mentions(inputs)
	if (locale === "it") return it_social_editor_mentions(inputs)
	if (locale === "nl") return nl_social_editor_mentions(inputs)
	if (locale === "pl") return pl_social_editor_mentions(inputs)
	if (locale === "pt") return pt_social_editor_mentions(inputs)
	if (locale === "ru") return ru_social_editor_mentions(inputs)
	if (locale === "sv") return sv_social_editor_mentions(inputs)
	if (locale === "tr") return tr_social_editor_mentions(inputs)
	if (locale === "zh") return zh_social_editor_mentions(inputs)
	if (locale === "ja") return ja_social_editor_mentions(inputs)
	return en_social_editor_mentions(inputs)
});
