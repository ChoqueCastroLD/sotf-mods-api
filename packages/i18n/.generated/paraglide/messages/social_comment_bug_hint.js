/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Bug_HintInputs */

const en_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug reports go to the creator’s inbox. Say what you did, what happened and what you expected.`)
};

const es_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los reportes de bug llegan a la bandeja del creador. Cuenta qué hiciste, qué pasó y qué esperabas.`)
};

const de_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlerberichte landen im Posteingang des Erstellers. Beschreib, was du getan hast, was passiert ist und was du erwartet hast.`)
};

const fr_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rapports de bug arrivent dans la boîte du créateur. Dites ce que vous avez fait, ce qui s’est passé et ce que vous attendiez.`)
};

const it_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le segnalazioni di bug arrivano al creatore. Scrivi cosa hai fatto, cosa è successo e cosa ti aspettavi.`)
};

const nl_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugmeldingen komen in de inbox van de maker. Vertel wat je deed, wat er gebeurde en wat je verwachtte.`)
};

const pl_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia błędów trafiają do skrzynki twórcy. Napisz, co zrobiłeś, co się stało i czego oczekiwałeś.`)
};

const pt_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatos de bug vão para a caixa do criador. Conte o que você fez, o que aconteceu e o que esperava.`)
};

const ru_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщения об ошибках попадают автору. Опишите, что вы сделали, что произошло и чего ожидали.`)
};

const sv_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggrapporter hamnar i skaparens inkorg. Berätta vad du gjorde, vad som hände och vad du väntade dig.`)
};

const tr_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata bildirimleri yapımcının gelen kutusuna gider. Ne yaptığını, ne olduğunu ve ne beklediğini yaz.`)
};

const zh_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误报告会进入作者的收件箱。请说明你做了什么、发生了什么以及预期结果。`)
};

const ja_social_comment_bug_hint = /** @type {(inputs: Social_Comment_Bug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バグ報告は作者の受信箱に届きます。何をしたか、何が起きたか、何を期待したかを書いてください。`)
};

/**
* | output |
* | --- |
* | "Bug reports go to the creator’s inbox. Say what you did, what happened and what you expected." |
*
* @param {Social_Comment_Bug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_bug_hint = /** @type {((inputs?: Social_Comment_Bug_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Bug_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_bug_hint(inputs)
	if (locale === "de") return de_social_comment_bug_hint(inputs)
	if (locale === "fr") return fr_social_comment_bug_hint(inputs)
	if (locale === "it") return it_social_comment_bug_hint(inputs)
	if (locale === "nl") return nl_social_comment_bug_hint(inputs)
	if (locale === "pl") return pl_social_comment_bug_hint(inputs)
	if (locale === "pt") return pt_social_comment_bug_hint(inputs)
	if (locale === "ru") return ru_social_comment_bug_hint(inputs)
	if (locale === "sv") return sv_social_comment_bug_hint(inputs)
	if (locale === "tr") return tr_social_comment_bug_hint(inputs)
	if (locale === "zh") return zh_social_comment_bug_hint(inputs)
	if (locale === "ja") return ja_social_comment_bug_hint(inputs)
	return en_social_comment_bug_hint(inputs)
});
