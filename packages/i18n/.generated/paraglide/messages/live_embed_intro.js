/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_IntroInputs */

const en_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a badge into a README, forum post or Discord. Badges update automatically.`)
};

const es_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega una insignia en un README, un mensaje de foro o Discord. Las insignias se actualizan automáticamente.`)
};

const de_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge ein Badge in ein README, einen Forenbeitrag oder Discord ein. Badges aktualisieren sich automatisch.`)
};

const fr_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez un badge dans un README, un message de forum ou Discord. Les badges se mettent à jour automatiquement.`)
};

const it_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla un badge in un README, un post del forum o Discord. I badge si aggiornano automaticamente.`)
};

const nl_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak een badge in een README, forumbericht of Discord. Badges worden automatisch bijgewerkt.`)
};

const pl_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej odznakę do README, posta na forum lub Discorda. Odznaki aktualizują się automatycznie.`)
};

const pt_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole um emblema em um README, post de fórum ou Discord. Os emblemas são atualizados automaticamente.`)
};

const ru_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте значок в README, сообщение на форуме или Discord. Значки обновляются автоматически.`)
};

const sv_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in ett märke i en README, ett foruminlägg eller Discord. Märkena uppdateras automatiskt.`)
};

const tr_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozeti README, forum gönderisi veya Discord’a yapıştır. Rozetler otomatik olarak güncellenir.`)
};

const zh_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可将徽章粘贴到 README、论坛帖子或 Discord，徽章会自动更新。`)
};

const ja_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`READMEやフォーラムの投稿、Discord にバッジを貼れます。バッジは自動で更新されます。`)
};

/**
* | output |
* | --- |
* | "Paste a badge into a README, forum post or Discord. Badges update automatically." |
*
* @param {Live_Embed_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_intro = /** @type {((inputs?: Live_Embed_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_intro(inputs)
	if (locale === "de") return de_live_embed_intro(inputs)
	if (locale === "fr") return fr_live_embed_intro(inputs)
	if (locale === "it") return it_live_embed_intro(inputs)
	if (locale === "nl") return nl_live_embed_intro(inputs)
	if (locale === "pl") return pl_live_embed_intro(inputs)
	if (locale === "pt") return pt_live_embed_intro(inputs)
	if (locale === "ru") return ru_live_embed_intro(inputs)
	if (locale === "sv") return sv_live_embed_intro(inputs)
	if (locale === "tr") return tr_live_embed_intro(inputs)
	if (locale === "zh") return zh_live_embed_intro(inputs)
	if (locale === "ja") return ja_live_embed_intro(inputs)
	return en_live_embed_intro(inputs)
});
