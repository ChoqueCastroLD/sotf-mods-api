/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Comments_EmptyInputs */

const en_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Ask the builder a question or share a screenshot.`)
};

const es_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios. Hazle una pregunta al constructor o comparte una captura.`)
};

const de_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare. Stelle dem Erbauer eine Frage oder teile einen Screenshot.`)
};

const fr_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de commentaires. Posez une question au bâtisseur ou partagez une capture d’écran.`)
};

const it_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento. Fai una domanda al costruttore o condividi uno screenshot.`)
};

const nl_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties. Stel de bouwer een vraag of deel een screenshot.`)
};

const pl_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy. Zadaj pytanie budowniczemu albo podziel się zrzutem ekranu.`)
};

const pt_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários. Faça uma pergunta ao construtor ou compartilhe uma captura de tela.`)
};

const ru_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет. Задайте вопрос строителю или поделитесь скриншотом.`)
};

const sv_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än. Ställ en fråga till byggaren eller dela en skärmbild.`)
};

const tr_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok. Yapımcıya bir soru sor ya da bir ekran görüntüsü paylaş.`)
};

const zh_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论。向建造者提个问题，或分享一张截图。`)
};

const ja_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントはまだありません。建築者に質問したり、スクリーンショットを共有したりしましょう。`)
};

/**
* | output |
* | --- |
* | "No comments yet. Ask the builder a question or share a screenshot." |
*
* @param {Builds_Comments_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_comments_empty = /** @type {((inputs?: Builds_Comments_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Comments_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_comments_empty(inputs)
	if (locale === "de") return de_builds_comments_empty(inputs)
	if (locale === "fr") return fr_builds_comments_empty(inputs)
	if (locale === "it") return it_builds_comments_empty(inputs)
	if (locale === "nl") return nl_builds_comments_empty(inputs)
	if (locale === "pl") return pl_builds_comments_empty(inputs)
	if (locale === "pt") return pt_builds_comments_empty(inputs)
	if (locale === "ru") return ru_builds_comments_empty(inputs)
	if (locale === "sv") return sv_builds_comments_empty(inputs)
	if (locale === "tr") return tr_builds_comments_empty(inputs)
	if (locale === "zh") return zh_builds_comments_empty(inputs)
	if (locale === "ja") return ja_builds_comments_empty(inputs)
	return en_builds_comments_empty(inputs)
});
