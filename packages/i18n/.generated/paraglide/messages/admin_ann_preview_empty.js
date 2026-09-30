/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Preview_EmptyInputs */

const en_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your message appears here.`)
};

const es_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mensaje aparece aquí.`)
};

const de_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier erscheint deine Nachricht.`)
};

const fr_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre message apparaît ici.`)
};

const it_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo messaggio compare qui.`)
};

const nl_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bericht verschijnt hier.`)
};

const pl_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj pojawi się twoja wiadomość.`)
};

const pt_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua mensagem aparece aqui.`)
};

const ru_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь появится ваш текст.`)
};

const sv_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt meddelande visas här.`)
};

const tr_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesajın burada görünür.`)
};

const zh_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的内容会显示在这里。`)
};

const ja_admin_ann_preview_empty = /** @type {(inputs: Admin_Ann_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにメッセージが表示されます。`)
};

/**
* | output |
* | --- |
* | "Your message appears here." |
*
* @param {Admin_Ann_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_preview_empty = /** @type {((inputs?: Admin_Ann_Preview_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Preview_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_preview_empty(inputs)
	if (locale === "de") return de_admin_ann_preview_empty(inputs)
	if (locale === "fr") return fr_admin_ann_preview_empty(inputs)
	if (locale === "it") return it_admin_ann_preview_empty(inputs)
	if (locale === "nl") return nl_admin_ann_preview_empty(inputs)
	if (locale === "pl") return pl_admin_ann_preview_empty(inputs)
	if (locale === "pt") return pt_admin_ann_preview_empty(inputs)
	if (locale === "ru") return ru_admin_ann_preview_empty(inputs)
	if (locale === "sv") return sv_admin_ann_preview_empty(inputs)
	if (locale === "tr") return tr_admin_ann_preview_empty(inputs)
	if (locale === "zh") return zh_admin_ann_preview_empty(inputs)
	if (locale === "ja") return ja_admin_ann_preview_empty(inputs)
	return en_admin_ann_preview_empty(inputs)
});
