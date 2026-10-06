/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Empty_TextInputs */

const en_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish your first mod or build to follow its downloads, reviews and comments here.`)
};

const es_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica tu primer mod o build y aquí seguirás sus descargas, reseñas y comentarios.`)
};

const de_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentliche deinen ersten Mod oder Build und verfolge hier Downloads, Bewertungen und Kommentare.`)
};

const fr_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez votre premier mod ou build et suivez ici ses téléchargements, avis et commentaires.`)
};

const it_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica la tua prima mod o build e qui ne seguirai download, recensioni e commenti.`)
};

const nl_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer je eerste mod of build en volg hier de downloads, reviews en reacties.`)
};

const pl_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj swój pierwszy mod lub build, a tutaj będziesz śledzić pobrania, recenzje i komentarze.`)
};

const pt_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique seu primeiro mod ou build e acompanhe aqui os downloads, avaliações e comentários.`)
};

const ru_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликуйте первый мод или постройку, и здесь вы будете следить за загрузками, отзывами и комментариями.`)
};

const sv_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera din första modd eller ditt första bygge och följ här nedladdningar, recensioner och kommentarer.`)
};

const tr_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu ya da yapını yayınla; indirmeleri, incelemeleri ve yorumları burada takip et.`)
};

const zh_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布你的第一个模组或建筑，就能在这里跟踪下载量、评价和评论。`)
};

const ja_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の MOD や建築を公開すると、ダウンロード、レビュー、コメントをここで確認できます。`)
};

/**
* | output |
* | --- |
* | "Publish your first mod or build to follow its downloads, reviews and comments here." |
*
* @param {Basecamp_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_empty_text = /** @type {((inputs?: Basecamp_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_empty_text(inputs)
	if (locale === "de") return de_basecamp_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_empty_text(inputs)
	if (locale === "it") return it_basecamp_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_empty_text(inputs)
	return en_basecamp_empty_text(inputs)
});
