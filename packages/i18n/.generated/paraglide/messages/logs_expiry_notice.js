/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Expiry_NoticeInputs */

const en_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This link and its content are deleted automatically after 24 hours.`)
};

const es_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este enlace y su contenido se eliminan automáticamente a las 24 horas.`)
};

const de_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Link und sein Inhalt werden nach 24 Stunden automatisch gelöscht.`)
};

const fr_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce lien et son contenu sont supprimés automatiquement après 24 heures.`)
};

const it_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo link e il suo contenuto vengono eliminati automaticamente dopo 24 ore.`)
};

const nl_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze link en de inhoud worden na 24 uur automatisch verwijderd.`)
};

const pl_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten link i jego zawartość są usuwane automatycznie po 24 godzinach.`)
};

const pt_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta ligação e o seu conteúdo são apagados automaticamente ao fim de 24 horas.`)
};

const ru_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта ссылка и её содержимое автоматически удаляются через 24 часа.`)
};

const sv_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här länken och dess innehåll raderas automatiskt efter 24 timmar.`)
};

const tr_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bağlantı ve içeriği 24 saat sonra otomatik olarak silinir.`)
};

const zh_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此链接及其内容会在 24 小时后自动删除。`)
};

const ja_logs_expiry_notice = /** @type {(inputs: Logs_Expiry_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリンクと内容は 24 時間後に自動で削除されます。`)
};

/**
* | output |
* | --- |
* | "This link and its content are deleted automatically after 24 hours." |
*
* @param {Logs_Expiry_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_expiry_notice = /** @type {((inputs?: Logs_Expiry_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Expiry_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_expiry_notice(inputs)
	if (locale === "de") return de_logs_expiry_notice(inputs)
	if (locale === "fr") return fr_logs_expiry_notice(inputs)
	if (locale === "it") return it_logs_expiry_notice(inputs)
	if (locale === "nl") return nl_logs_expiry_notice(inputs)
	if (locale === "pl") return pl_logs_expiry_notice(inputs)
	if (locale === "pt") return pt_logs_expiry_notice(inputs)
	if (locale === "ru") return ru_logs_expiry_notice(inputs)
	if (locale === "sv") return sv_logs_expiry_notice(inputs)
	if (locale === "tr") return tr_logs_expiry_notice(inputs)
	if (locale === "zh") return zh_logs_expiry_notice(inputs)
	if (locale === "ja") return ja_logs_expiry_notice(inputs)
	return en_logs_expiry_notice(inputs)
});
