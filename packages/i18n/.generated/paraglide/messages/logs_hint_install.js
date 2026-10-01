/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Hint_InstallInputs */

const en_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something not working? Share your log so others can help you.`)
};

const es_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Algo no funciona? Comparte tu log para que otros puedan ayudarte.`)
};

const de_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas funktioniert nicht? Teile dein Log, damit dir andere helfen können.`)
};

const fr_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelque chose ne marche pas ? Partagez votre log pour que d’autres puissent vous aider.`)
};

const it_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa non funziona? Condividi il tuo log così gli altri possono aiutarti.`)
};

const nl_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt er iets niet? Deel je log zodat anderen je kunnen helpen.`)
};

const pl_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś nie działa? Udostępnij swój log, aby inni mogli ci pomóc.`)
};

const pt_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo não funciona? Partilhe o seu log para que outros o possam ajudar.`)
};

const ru_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то не работает? Поделитесь логом, чтобы вам могли помочь.`)
};

const sv_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar något inte? Dela din logg så att andra kan hjälpa dig.`)
};

const tr_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şey çalışmıyor mu? Başkalarının yardım edebilmesi için logunuzu paylaşın.`)
};

const zh_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有东西不能用？分享你的日志，方便他人帮助你。`)
};

const ja_logs_hint_install = /** @type {(inputs: Logs_Hint_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`うまく動かない場合は、ログを共有すると他の人が手助けできます。`)
};

/**
* | output |
* | --- |
* | "Something not working? Share your log so others can help you." |
*
* @param {Logs_Hint_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_hint_install = /** @type {((inputs?: Logs_Hint_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Hint_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_hint_install(inputs)
	if (locale === "de") return de_logs_hint_install(inputs)
	if (locale === "fr") return fr_logs_hint_install(inputs)
	if (locale === "it") return it_logs_hint_install(inputs)
	if (locale === "nl") return nl_logs_hint_install(inputs)
	if (locale === "pl") return pl_logs_hint_install(inputs)
	if (locale === "pt") return pt_logs_hint_install(inputs)
	if (locale === "ru") return ru_logs_hint_install(inputs)
	if (locale === "sv") return sv_logs_hint_install(inputs)
	if (locale === "tr") return tr_logs_hint_install(inputs)
	if (locale === "zh") return zh_logs_hint_install(inputs)
	if (locale === "ja") return ja_logs_hint_install(inputs)
	return en_logs_hint_install(inputs)
});
