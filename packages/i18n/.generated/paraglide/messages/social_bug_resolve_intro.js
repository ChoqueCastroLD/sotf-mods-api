/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Bug_Resolve_IntroInputs */

const en_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The reporter is notified and the comment shows «Fixed in vX».`)
};

const es_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quien lo reportó recibe un aviso y el comentario muestra «Resuelto en vX».`)
};

const de_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die meldende Person wird benachrichtigt und der Kommentar zeigt «Behoben in vX».`)
};

const fr_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La personne qui l’a signalé est prévenue et le commentaire affiche « Corrigé dans la vX ».`)
};

const it_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi l’ha segnalato riceve un avviso e il commento mostra «Risolto nella vX».`)
};

const nl_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melder krijgt een melding en de reactie toont «Opgelost in vX».`)
};

const pl_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłaszający dostanie powiadomienie, a komentarz pokaże «Naprawione w vX».`)
};

const pt_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem relatou recebe um aviso e o comentário mostra «Corrigido na vX».`)
};

const ru_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор сообщения получит уведомление, а у комментария появится «Исправлено в vX».`)
};

const sv_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den som rapporterade får en avisering och kommentaren visar ”Åtgärdad i vX”.`)
};

const tr_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildiren kişiye bildirim gider ve yorumda “vX sürümünde düzeltildi” görünür.`)
};

const zh_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告者会收到通知，评论会显示“已在 vX 修复”。`)
};

const ja_social_bug_resolve_intro = /** @type {(inputs: Social_Bug_Resolve_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告者に通知が届き、コメントに「vX で修正済み」と表示されます。`)
};

/**
* | output |
* | --- |
* | "The reporter is notified and the comment shows «Fixed in vX»." |
*
* @param {Social_Bug_Resolve_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_bug_resolve_intro = /** @type {((inputs?: Social_Bug_Resolve_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolve_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_bug_resolve_intro(inputs)
	if (locale === "de") return de_social_bug_resolve_intro(inputs)
	if (locale === "fr") return fr_social_bug_resolve_intro(inputs)
	if (locale === "it") return it_social_bug_resolve_intro(inputs)
	if (locale === "nl") return nl_social_bug_resolve_intro(inputs)
	if (locale === "pl") return pl_social_bug_resolve_intro(inputs)
	if (locale === "pt") return pt_social_bug_resolve_intro(inputs)
	if (locale === "ru") return ru_social_bug_resolve_intro(inputs)
	if (locale === "sv") return sv_social_bug_resolve_intro(inputs)
	if (locale === "tr") return tr_social_bug_resolve_intro(inputs)
	if (locale === "zh") return zh_social_bug_resolve_intro(inputs)
	if (locale === "ja") return ja_social_bug_resolve_intro(inputs)
	return en_social_bug_resolve_intro(inputs)
});
