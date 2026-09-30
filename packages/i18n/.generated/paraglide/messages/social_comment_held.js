/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_HeldInputs */

const en_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posted. Comments with outside links from new accounts wait for a quick Ranger check.`)
};

const es_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado. Los comentarios con enlaces externos de cuentas nuevas esperan una revisión rápida de los rangers.`)
};

const de_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesendet. Kommentare neuer Konten mit externen Links warten auf eine kurze Prüfung durch die Ranger.`)
};

const fr_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyé. Les commentaires de nouveaux comptes avec des liens externes attendent une vérification rapide des rangers.`)
};

const it_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviato. I commenti con link esterni degli account nuovi attendono un rapido controllo dei ranger.`)
};

const nl_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geplaatst. Reacties met externe links van nieuwe accounts wachten op een snelle controle door de rangers.`)
};

const pl_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano. Komentarze nowych kont z linkami zewnętrznymi czekają na szybką kontrolę rangerów.`)
};

const pt_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviado. Comentários com links externos de contas novas aguardam uma checagem rápida dos rangers.`)
};

const ru_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправлено. Комментарии новых аккаунтов с внешними ссылками ждут быстрой проверки рейнджеров.`)
};

const sv_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickat. Kommentarer med externa länkar från nya konton väntar på en snabb kontroll av rangers.`)
};

const tr_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderildi. Yeni hesaplardan gelen dış bağlantılı yorumlar kısa bir korucu kontrolü bekler.`)
};

const zh_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已提交。新账号含外部链接的评论需等待巡林员快速审核。`)
};

const ja_social_comment_held = /** @type {(inputs: Social_Comment_HeldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信しました。新しいアカウントの外部リンク付きコメントはレンジャーの確認待ちになります。`)
};

/**
* | output |
* | --- |
* | "Posted. Comments with outside links from new accounts wait for a quick Ranger check." |
*
* @param {Social_Comment_HeldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_held = /** @type {((inputs?: Social_Comment_HeldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_HeldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_held(inputs)
	if (locale === "de") return de_social_comment_held(inputs)
	if (locale === "fr") return fr_social_comment_held(inputs)
	if (locale === "it") return it_social_comment_held(inputs)
	if (locale === "nl") return nl_social_comment_held(inputs)
	if (locale === "pl") return pl_social_comment_held(inputs)
	if (locale === "pt") return pt_social_comment_held(inputs)
	if (locale === "ru") return ru_social_comment_held(inputs)
	if (locale === "sv") return sv_social_comment_held(inputs)
	if (locale === "tr") return tr_social_comment_held(inputs)
	if (locale === "zh") return zh_social_comment_held(inputs)
	if (locale === "ja") return ja_social_comment_held(inputs)
	return en_social_comment_held(inputs)
});
