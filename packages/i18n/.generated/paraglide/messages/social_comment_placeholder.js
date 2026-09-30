/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_PlaceholderInputs */

const en_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask, share a tip or report a problem…`)
};

const es_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pregunta, comparte un truco o avisa de un problema…`)
};

const de_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frag nach, teile einen Tipp oder melde ein Problem…`)
};

const fr_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posez une question, partagez une astuce ou signalez un problème…`)
};

const it_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fai una domanda, condividi un consiglio o segnala un problema…`)
};

const nl_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel een vraag, deel een tip of meld een probleem…`)
};

const pl_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadaj pytanie, podziel się wskazówką lub zgłoś problem…`)
};

const pt_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pergunte, compartilhe uma dica ou relate um problema…`)
};

const ru_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задайте вопрос, поделитесь советом или сообщите о проблеме…`)
};

const sv_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga, dela ett tips eller rapportera ett problem…`)
};

const tr_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soru sor, ipucu paylaş ya da bir sorun bildir…`)
};

const zh_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提问、分享技巧或报告问题…`)
};

const ja_social_comment_placeholder = /** @type {(inputs: Social_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問、ヒントの共有、問題の報告など…`)
};

/**
* | output |
* | --- |
* | "Ask, share a tip or report a problem…" |
*
* @param {Social_Comment_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_placeholder = /** @type {((inputs?: Social_Comment_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_placeholder(inputs)
	if (locale === "de") return de_social_comment_placeholder(inputs)
	if (locale === "fr") return fr_social_comment_placeholder(inputs)
	if (locale === "it") return it_social_comment_placeholder(inputs)
	if (locale === "nl") return nl_social_comment_placeholder(inputs)
	if (locale === "pl") return pl_social_comment_placeholder(inputs)
	if (locale === "pt") return pt_social_comment_placeholder(inputs)
	if (locale === "ru") return ru_social_comment_placeholder(inputs)
	if (locale === "sv") return sv_social_comment_placeholder(inputs)
	if (locale === "tr") return tr_social_comment_placeholder(inputs)
	if (locale === "zh") return zh_social_comment_placeholder(inputs)
	if (locale === "ja") return ja_social_comment_placeholder(inputs)
	return en_social_comment_placeholder(inputs)
});
