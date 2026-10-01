/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_SubmitInputs */

const en_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create link`)
};

const es_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear enlace`)
};

const de_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link erstellen`)
};

const fr_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer le lien`)
};

const it_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea link`)
};

const nl_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link maken`)
};

const pl_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz link`)
};

const pt_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar ligação`)
};

const ru_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать ссылку`)
};

const sv_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa länk`)
};

const tr_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı oluştur`)
};

const zh_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建链接`)
};

const ja_logs_submit = /** @type {(inputs: Logs_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを作成`)
};

/**
* | output |
* | --- |
* | "Create link" |
*
* @param {Logs_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_submit = /** @type {((inputs?: Logs_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_submit(inputs)
	if (locale === "de") return de_logs_submit(inputs)
	if (locale === "fr") return fr_logs_submit(inputs)
	if (locale === "it") return it_logs_submit(inputs)
	if (locale === "nl") return nl_logs_submit(inputs)
	if (locale === "pl") return pl_logs_submit(inputs)
	if (locale === "pt") return pt_logs_submit(inputs)
	if (locale === "ru") return ru_logs_submit(inputs)
	if (locale === "sv") return sv_logs_submit(inputs)
	if (locale === "tr") return tr_logs_submit(inputs)
	if (locale === "zh") return zh_logs_submit(inputs)
	if (locale === "ja") return ja_logs_submit(inputs)
	return en_logs_submit(inputs)
});
