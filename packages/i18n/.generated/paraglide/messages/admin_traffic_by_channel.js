/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_ChannelInputs */

const en_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads by channel`)
};

const es_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas por canal`)
};

const de_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nach Kanal`)
};

const fr_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements par canal`)
};

const it_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download per canale`)
};

const nl_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per kanaal`)
};

const pl_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania według kanału`)
};

const pt_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads por canal`)
};

const ru_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания по каналам`)
};

const sv_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar per kanal`)
};

const tr_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanala göre indirmeler`)
};

const zh_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按渠道的下载`)
};

const ja_admin_traffic_by_channel = /** @type {(inputs: Admin_Traffic_By_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャネル別ダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads by channel" |
*
* @param {Admin_Traffic_By_ChannelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_channel = /** @type {((inputs?: Admin_Traffic_By_ChannelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_ChannelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_channel(inputs)
	if (locale === "de") return de_admin_traffic_by_channel(inputs)
	if (locale === "fr") return fr_admin_traffic_by_channel(inputs)
	if (locale === "it") return it_admin_traffic_by_channel(inputs)
	if (locale === "nl") return nl_admin_traffic_by_channel(inputs)
	if (locale === "pl") return pl_admin_traffic_by_channel(inputs)
	if (locale === "pt") return pt_admin_traffic_by_channel(inputs)
	if (locale === "ru") return ru_admin_traffic_by_channel(inputs)
	if (locale === "sv") return sv_admin_traffic_by_channel(inputs)
	if (locale === "tr") return tr_admin_traffic_by_channel(inputs)
	if (locale === "zh") return zh_admin_traffic_by_channel(inputs)
	if (locale === "ja") return ja_admin_traffic_by_channel(inputs)
	return en_admin_traffic_by_channel(inputs)
});
