/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_IntroInputs */

const en_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste or drop your log so someone can help you. Personal data is removed before it is saved.`)
};

const es_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega o suelta tu log para que alguien pueda ayudarte. Los datos personales se eliminan antes de guardarlo.`)
};

const de_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge dein Log ein oder ziehe es hinein, damit dir jemand helfen kann. Persönliche Daten werden vor dem Speichern entfernt.`)
};

const fr_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez ou déposez votre log pour que quelqu’un puisse vous aider. Les données personnelles sont retirées avant l’enregistrement.`)
};

const it_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla o trascina il tuo log così qualcuno può aiutarti. I dati personali vengono rimossi prima del salvataggio.`)
};

const nl_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak of sleep je log zodat iemand je kan helpen. Persoonlijke gegevens worden verwijderd voordat het wordt opgeslagen.`)
};

const pl_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej lub upuść swój log, aby ktoś mógł ci pomóc. Dane osobowe są usuwane przed zapisaniem.`)
};

const pt_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole ou largue o seu log para que alguém o possa ajudar. Os dados pessoais são removidos antes de guardar.`)
};

const ru_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте или перетащите лог, чтобы вам могли помочь. Личные данные удаляются до сохранения.`)
};

const sv_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in eller släpp din logg så att någon kan hjälpa dig. Personuppgifter tas bort innan den sparas.`)
};

const tr_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size yardım edilebilmesi için logunuzu yapıştırın ya da bırakın. Kişisel veriler kaydedilmeden önce kaldırılır.`)
};

const zh_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`粘贴或拖入日志，方便他人帮助你。个人信息会在保存前移除。`)
};

const ja_logs_intro = /** @type {(inputs: Logs_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かに助けてもらえるよう、ログを貼り付けるかドロップしてください。個人情報は保存前に除去されます。`)
};

/**
* | output |
* | --- |
* | "Paste or drop your log so someone can help you. Personal data is removed before it is saved." |
*
* @param {Logs_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_intro = /** @type {((inputs?: Logs_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_intro(inputs)
	if (locale === "de") return de_logs_intro(inputs)
	if (locale === "fr") return fr_logs_intro(inputs)
	if (locale === "it") return it_logs_intro(inputs)
	if (locale === "nl") return nl_logs_intro(inputs)
	if (locale === "pl") return pl_logs_intro(inputs)
	if (locale === "pt") return pt_logs_intro(inputs)
	if (locale === "ru") return ru_logs_intro(inputs)
	if (locale === "sv") return sv_logs_intro(inputs)
	if (locale === "tr") return tr_logs_intro(inputs)
	if (locale === "zh") return zh_logs_intro(inputs)
	if (locale === "ja") return ja_logs_intro(inputs)
	return en_logs_intro(inputs)
});
