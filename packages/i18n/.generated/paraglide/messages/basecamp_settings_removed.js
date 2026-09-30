/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_RemovedInputs */

const en_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed by the rangers. Contact them if you think it is a mistake.`)
};

const es_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado por los guardabosques. Contacta con ellos si crees que es un error.`)
};

const de_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von den Rangern entfernt. Melde dich bei ihnen, wenn du es für einen Fehler hältst.`)
};

const fr_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retiré par les rangers. Contactez-les si vous pensez qu’il s’agit d’une erreur.`)
};

const it_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa dai ranger. Contattali se pensi che sia un errore.`)
};

const nl_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd door de rangers. Neem contact op als je denkt dat het een vergissing is.`)
};

const pl_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty przez strażników. Skontaktuj się z nimi, jeśli to pomyłka.`)
};

const pt_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido pelos guardas. Fale com eles se achar que é um engano.`)
};

const ru_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалён рейнджерами. Свяжитесь с ними, если считаете это ошибкой.`)
};

const sv_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen av rangers. Kontakta dem om du tror att det är ett misstag.`)
};

const tr_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular tarafından kaldırıldı. Bir hata olduğunu düşünüyorsan onlarla iletişime geç.`)
};

const zh_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已被护林员下架。如果你认为有误，请联系他们。`)
};

const ja_basecamp_settings_removed = /** @type {(inputs: Basecamp_Settings_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーにより削除されました。誤りだと思う場合は連絡してください。`)
};

/**
* | output |
* | --- |
* | "Removed by the rangers. Contact them if you think it is a mistake." |
*
* @param {Basecamp_Settings_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removed = /** @type {((inputs?: Basecamp_Settings_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removed(inputs)
	if (locale === "de") return de_basecamp_settings_removed(inputs)
	if (locale === "fr") return fr_basecamp_settings_removed(inputs)
	if (locale === "it") return it_basecamp_settings_removed(inputs)
	if (locale === "nl") return nl_basecamp_settings_removed(inputs)
	if (locale === "pl") return pl_basecamp_settings_removed(inputs)
	if (locale === "pt") return pt_basecamp_settings_removed(inputs)
	if (locale === "ru") return ru_basecamp_settings_removed(inputs)
	if (locale === "sv") return sv_basecamp_settings_removed(inputs)
	if (locale === "tr") return tr_basecamp_settings_removed(inputs)
	if (locale === "zh") return zh_basecamp_settings_removed(inputs)
	if (locale === "ja") return ja_basecamp_settings_removed(inputs)
	return en_basecamp_settings_removed(inputs)
});
