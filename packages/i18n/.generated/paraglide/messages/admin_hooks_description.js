/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Admin_Hooks_DescriptionInputs */

const en_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} channels. Webhook addresses are secrets: anyone with one can post to the channel.`)
};

const es_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} canales. Las direcciones de webhook son secretas: quien tenga una puede publicar en el canal.`)
};

const de_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max} Kanäle. Webhook-Adressen sind geheim: Wer eine hat, kann in den Kanal posten.`)
};

const fr_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jusqu’à ${i?.max} salons. Les adresses de webhook sont secrètes : quiconque en possède une peut publier dans le salon.`)
};

const it_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max} canali. Gli indirizzi dei webhook sono segreti: chiunque ne abbia uno può pubblicare nel canale.`)
};

const nl_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} kanalen. Webhookadressen zijn geheim: iedereen die er een heeft kan in het kanaal posten.`)
};

const pl_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maksymalnie ${i?.max} kanałów. Adresy webhooków są tajne: każdy, kto ma taki adres, może pisać na kanale.`)
};

const pt_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} canais. Endereços de webhook são segredos: quem tiver um pode postar no canal.`)
};

const ru_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max} каналов. Адреса вебхуков секретны: любой, у кого он есть, может писать в канал.`)
};

const sv_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upp till ${i?.max} kanaler. Webhookadresser är hemliga: den som har en kan posta i kanalen.`)
};

const tr_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} kanal. Webhook adresleri gizlidir: birine sahip olan herkes kanala gönderi yapabilir.`)
};

const zh_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个频道。Webhook 地址是机密：任何拿到地址的人都能在频道中发帖。`)
};

const ja_admin_hooks_description = /** @type {(inputs: Admin_Hooks_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最大 ${i?.max} チャンネル。Webhook のアドレスは秘密情報です。知っている人は誰でもチャンネルに投稿できます。`)
};

/**
* | output |
* | --- |
* | "Up to {max} channels. Webhook addresses are secrets: anyone with one can post to the channel." |
*
* @param {Admin_Hooks_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_description = /** @type {((inputs: Admin_Hooks_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_description(inputs)
	if (locale === "de") return de_admin_hooks_description(inputs)
	if (locale === "fr") return fr_admin_hooks_description(inputs)
	if (locale === "it") return it_admin_hooks_description(inputs)
	if (locale === "nl") return nl_admin_hooks_description(inputs)
	if (locale === "pl") return pl_admin_hooks_description(inputs)
	if (locale === "pt") return pt_admin_hooks_description(inputs)
	if (locale === "ru") return ru_admin_hooks_description(inputs)
	if (locale === "sv") return sv_admin_hooks_description(inputs)
	if (locale === "tr") return tr_admin_hooks_description(inputs)
	if (locale === "zh") return zh_admin_hooks_description(inputs)
	if (locale === "ja") return ja_admin_hooks_description(inputs)
	return en_admin_hooks_description(inputs)
});
