/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_PlaceholderInputs */

const en_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add details, ask a question or offer help…`)
};

const es_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade detalles, haz una pregunta u ofrece ayuda…`)
};

const de_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergänze Details, stelle eine Frage oder biete Hilfe an…`)
};

const fr_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez des détails, posez une question ou proposez votre aide…`)
};

const it_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi dettagli, fai una domanda o offri aiuto…`)
};

const nl_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg details toe, stel een vraag of bied hulp aan…`)
};

const pl_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj szczegóły, zadaj pytanie lub zaoferuj pomoc…`)
};

const pt_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione detalhes, faça uma pergunta ou ofereça ajuda…`)
};

const ru_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте подробности, задайте вопрос или предложите помощь…`)
};

const sv_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till detaljer, ställ en fråga eller erbjud hjälp…`)
};

const tr_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntı ekleyin, soru sorun veya yardım önerin…`)
};

const zh_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补充细节、提问或提供帮助……`)
};

const ja_requests_comment_placeholder = /** @type {(inputs: Requests_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細の追加、質問、協力の申し出などをどうぞ…`)
};

/**
* | output |
* | --- |
* | "Add details, ask a question or offer help…" |
*
* @param {Requests_Comment_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_placeholder = /** @type {((inputs?: Requests_Comment_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_placeholder(inputs)
	if (locale === "de") return de_requests_comment_placeholder(inputs)
	if (locale === "fr") return fr_requests_comment_placeholder(inputs)
	if (locale === "it") return it_requests_comment_placeholder(inputs)
	if (locale === "nl") return nl_requests_comment_placeholder(inputs)
	if (locale === "pl") return pl_requests_comment_placeholder(inputs)
	if (locale === "pt") return pt_requests_comment_placeholder(inputs)
	if (locale === "ru") return ru_requests_comment_placeholder(inputs)
	if (locale === "sv") return sv_requests_comment_placeholder(inputs)
	if (locale === "tr") return tr_requests_comment_placeholder(inputs)
	if (locale === "zh") return zh_requests_comment_placeholder(inputs)
	if (locale === "ja") return ja_requests_comment_placeholder(inputs)
	return en_requests_comment_placeholder(inputs)
});
