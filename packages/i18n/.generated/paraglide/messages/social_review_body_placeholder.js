/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Body_PlaceholderInputs */

const en_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What worked, what didn’t, and who is it for?`)
};

const es_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué funcionó, qué no y para quién es?`)
};

const de_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was hat funktioniert, was nicht, und für wen ist es?`)
};

const fr_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qu’est-ce qui marche, qu’est-ce qui ne marche pas, et pour qui ?`)
};

const it_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa ha funzionato, cosa no e per chi è?`)
};

const nl_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat werkte, wat niet, en voor wie is het?`)
};

const pl_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co działało, co nie i dla kogo to jest?`)
};

const pt_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que funcionou, o que não funcionou e para quem é?`)
};

const ru_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что сработало, что нет и кому это подойдёт?`)
};

const sv_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad fungerade, vad fungerade inte och vem passar det?`)
};

const tr_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne işe yaradı, ne yaramadı ve kimin için uygun?`)
};

const zh_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`哪些好用、哪些不好用？适合谁？`)
};

const ja_social_review_body_placeholder = /** @type {(inputs: Social_Review_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`良かった点、良くなかった点、どんな人向けか。`)
};

/**
* | output |
* | --- |
* | "What worked, what didn’t, and who is it for?" |
*
* @param {Social_Review_Body_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_body_placeholder = /** @type {((inputs?: Social_Review_Body_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Body_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_body_placeholder(inputs)
	if (locale === "de") return de_social_review_body_placeholder(inputs)
	if (locale === "fr") return fr_social_review_body_placeholder(inputs)
	if (locale === "it") return it_social_review_body_placeholder(inputs)
	if (locale === "nl") return nl_social_review_body_placeholder(inputs)
	if (locale === "pl") return pl_social_review_body_placeholder(inputs)
	if (locale === "pt") return pt_social_review_body_placeholder(inputs)
	if (locale === "ru") return ru_social_review_body_placeholder(inputs)
	if (locale === "sv") return sv_social_review_body_placeholder(inputs)
	if (locale === "tr") return tr_social_review_body_placeholder(inputs)
	if (locale === "zh") return zh_social_review_body_placeholder(inputs)
	if (locale === "ja") return ja_social_review_body_placeholder(inputs)
	return en_social_review_body_placeholder(inputs)
});
