/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Comments_EmptyInputs */

const en_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Ask the builder something or share a screenshot of it on your island.`)
};

const es_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios. Pregúntale algo al constructor o comparte una captura de la build en tu isla.`)
};

const de_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare. Frag den Erbauer etwas oder teile einen Screenshot davon auf deiner Insel.`)
};

const fr_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de commentaires. Posez une question au bâtisseur ou partagez une capture de la build sur votre île.`)
};

const it_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento. Chiedi qualcosa al costruttore o condividi uno screenshot della build sulla tua isola.`)
};

const nl_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties. Stel de bouwer een vraag of deel een screenshot ervan op jouw eiland.`)
};

const pl_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy. Zapytaj o coś budowniczego albo podziel się zrzutem ekranu z tym buildem na swojej wyspie.`)
};

const pt_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários. Pergunte algo ao construtor ou compartilhe uma captura da build na sua ilha.`)
};

const ru_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет. Задайте вопрос строителю или поделитесь скриншотом постройки на своём острове.`)
};

const sv_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än. Fråga byggaren något eller dela en skärmbild av bygget på din ö.`)
};

const tr_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok. Yapımcıya bir şey sor ya da yapının kendi adandaki ekran görüntüsünü paylaş.`)
};

const zh_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论。向建造者提个问题，或分享它在你岛上的截图。`)
};

const ja_builds_comments_empty = /** @type {(inputs: Builds_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントはまだありません。建築者に質問したり、自分の島でのスクリーンショットを共有したりしましょう。`)
};

/**
* | output |
* | --- |
* | "No comments yet. Ask the builder something or share a screenshot of it on your island." |
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
