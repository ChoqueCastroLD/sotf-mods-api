/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_TextInputs */

const en_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments, bug reports, reviews and field reports on your mods will show up here.`)
};

const es_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aquí aparecerán los comentarios, reportes de bugs, reseñas y reportes de campo de tus mods.`)
};

const de_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare, Fehlerberichte, Bewertungen und Feldberichte zu deinen Mods erscheinen hier.`)
};

const fr_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les commentaires, rapports de bug, avis et rapports de terrain sur vos mods apparaîtront ici.`)
};

const it_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui compariranno commenti, segnalazioni di bug, recensioni e rapporti sul campo delle tue mod.`)
};

const nl_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties, bugmeldingen, reviews en veldrapporten over je mods verschijnen hier.`)
};

const pl_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj pojawią się komentarze, zgłoszenia błędów, recenzje i raporty terenowe o twoich modach.`)
};

const pt_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários, relatórios de bugs, avaliações e relatórios de campo dos seus mods vão aparecer aqui.`)
};

const ru_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь появятся комментарии, сообщения об ошибках, отзывы и полевые отчёты о ваших модах.`)
};

const sv_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer, felrapporter, recensioner och fältrapporter om dina moddar visas här.`)
};

const tr_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına gelen yorumlar, hata bildirimleri, incelemeler ve saha raporları burada görünecek.`)
};

const zh_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的评论、错误报告、评价和实地报告会显示在这里。`)
};

const ja_basecamp_inbox_empty_text = /** @type {(inputs: Basecamp_Inbox_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD へのコメント、不具合報告、レビュー、フィールドレポートがここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Comments, bug reports, reviews and field reports on your mods will show up here." |
*
* @param {Basecamp_Inbox_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_empty_text = /** @type {((inputs?: Basecamp_Inbox_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_empty_text(inputs)
	if (locale === "de") return de_basecamp_inbox_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_inbox_empty_text(inputs)
	if (locale === "it") return it_basecamp_inbox_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_inbox_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_inbox_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_inbox_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_inbox_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_inbox_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_inbox_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_inbox_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_inbox_empty_text(inputs)
	return en_basecamp_inbox_empty_text(inputs)
});
