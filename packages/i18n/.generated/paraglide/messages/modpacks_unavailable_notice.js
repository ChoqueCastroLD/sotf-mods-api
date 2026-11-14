/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ names: NonNullable<unknown> }} Modpacks_Unavailable_NoticeInputs */

const en_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No longer available: ${i?.names}. They are skipped when the modpack is downloaded.`)
};

const es_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya no disponibles: ${i?.names}. Se omiten al descargar el modpack.`)
};

const de_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nicht mehr verfügbar: ${i?.names}. Sie werden beim Herunterladen des Modpacks übersprungen.`)
};

const fr_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plus disponibles : ${i?.names}. Ils sont ignorés au téléchargement du modpack.`)
};

const it_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non più disponibili: ${i?.names}. Vengono saltate quando si scarica il modpack.`)
};

const nl_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niet meer beschikbaar: ${i?.names}. Ze worden overgeslagen bij het downloaden van de modpack.`)
};

const pl_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niedostępne: ${i?.names}. Zostaną pominięte przy pobieraniu modpacka.`)
};

const pt_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não estão mais disponíveis: ${i?.names}. Eles são ignorados ao baixar o modpack.`)
};

const ru_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Больше недоступны: ${i?.names}. Они пропускаются при скачивании модпака.`)
};

const sv_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inte längre tillgängliga: ${i?.names}. De hoppas över när modpaketet laddas ner.`)
};

const tr_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Artık mevcut değil: ${i?.names}. Mod paketi indirilirken atlanırlar.`)
};

const zh_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已不可用：${i?.names}。下载整合包时会跳过它们。`)
};

const ja_modpacks_unavailable_notice = /** @type {(inputs: Modpacks_Unavailable_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`利用できなくなった Mod: ${i?.names}。Modパックのダウンロード時にスキップされます。`)
};

/**
* | output |
* | --- |
* | "No longer available: {names}. They are skipped when the modpack is downloaded." |
*
* @param {Modpacks_Unavailable_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_unavailable_notice = /** @type {((inputs: Modpacks_Unavailable_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Unavailable_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_unavailable_notice(inputs)
	if (locale === "de") return de_modpacks_unavailable_notice(inputs)
	if (locale === "fr") return fr_modpacks_unavailable_notice(inputs)
	if (locale === "it") return it_modpacks_unavailable_notice(inputs)
	if (locale === "nl") return nl_modpacks_unavailable_notice(inputs)
	if (locale === "pl") return pl_modpacks_unavailable_notice(inputs)
	if (locale === "pt") return pt_modpacks_unavailable_notice(inputs)
	if (locale === "ru") return ru_modpacks_unavailable_notice(inputs)
	if (locale === "sv") return sv_modpacks_unavailable_notice(inputs)
	if (locale === "tr") return tr_modpacks_unavailable_notice(inputs)
	if (locale === "zh") return zh_modpacks_unavailable_notice(inputs)
	if (locale === "ja") return ja_modpacks_unavailable_notice(inputs)
	return en_modpacks_unavailable_notice(inputs)
});
