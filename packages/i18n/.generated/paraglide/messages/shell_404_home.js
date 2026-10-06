/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_404_HomeInputs */

const en_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to home`)
};

const es_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al inicio`)
};

const de_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Startseite`)
};

const fr_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à l’accueil`)
};

const it_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla home`)
};

const nl_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar home`)
};

const pl_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć na stronę główną`)
};

const pt_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao início`)
};

const ru_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На главную`)
};

const sv_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till startsidan`)
};

const tr_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana sayfaya dön`)
};

const zh_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回首页`)
};

const ja_shell_404_home = /** @type {(inputs: Shell_404_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホームに戻る`)
};

/**
* | output |
* | --- |
* | "Back to home" |
*
* @param {Shell_404_HomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_404_home = /** @type {((inputs?: Shell_404_HomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_404_HomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_404_home(inputs)
	if (locale === "de") return de_shell_404_home(inputs)
	if (locale === "fr") return fr_shell_404_home(inputs)
	if (locale === "it") return it_shell_404_home(inputs)
	if (locale === "nl") return nl_shell_404_home(inputs)
	if (locale === "pl") return pl_shell_404_home(inputs)
	if (locale === "pt") return pt_shell_404_home(inputs)
	if (locale === "ru") return ru_shell_404_home(inputs)
	if (locale === "sv") return sv_shell_404_home(inputs)
	if (locale === "tr") return tr_shell_404_home(inputs)
	if (locale === "zh") return zh_shell_404_home(inputs)
	if (locale === "ja") return ja_shell_404_home(inputs)
	return en_shell_404_home(inputs)
});
