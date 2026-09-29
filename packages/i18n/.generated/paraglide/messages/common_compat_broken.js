/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Common_Compat_BrokenInputs */

const en_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reported broken on ${i?.build}. The creator has been pinged.`)
};

const es_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reportado roto en ${i?.build}. Hemos avisado al creador.`)
};

const de_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als defekt mit ${i?.build} gemeldet. Der Creator wurde benachrichtigt.`)
};

const fr_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Signalé cassé sur ${i?.build}. Le créateur a été prévenu.`)
};

const it_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnalata non funzionante su ${i?.build}. Abbiamo avvisato il creatore.`)
};

const nl_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemeld als kapot op ${i?.build}. De maker is op de hoogte gebracht.`)
};

const pl_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszony jako niedziałający na ${i?.build}. Twórca został powiadomiony.`)
};

const pt_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relatado como quebrado na ${i?.build}. Avisamos o criador.`)
};

const ru_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сообщают, что не работает на ${i?.build}. Автор уже в курсе.`)
};

const sv_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rapporterad trasig på ${i?.build}. Skaparen har meddelats.`)
};

const tr_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde bozuk olarak bildirildi. Üreticiye haber verildi.`)
};

const zh_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有人报告在 ${i?.build} 上无法运行，我们已通知创作者。`)
};

const ja_common_compat_broken = /** @type {(inputs: Common_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で動かないと報告されています。クリエイターに通知しました。`)
};

/**
* | output |
* | --- |
* | "Reported broken on {build}. The creator has been pinged." |
*
* @param {Common_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_compat_broken = /** @type {((inputs: Common_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_compat_broken(inputs)
	if (locale === "de") return de_common_compat_broken(inputs)
	if (locale === "fr") return fr_common_compat_broken(inputs)
	if (locale === "it") return it_common_compat_broken(inputs)
	if (locale === "nl") return nl_common_compat_broken(inputs)
	if (locale === "pl") return pl_common_compat_broken(inputs)
	if (locale === "pt") return pt_common_compat_broken(inputs)
	if (locale === "ru") return ru_common_compat_broken(inputs)
	if (locale === "sv") return sv_common_compat_broken(inputs)
	if (locale === "tr") return tr_common_compat_broken(inputs)
	if (locale === "zh") return zh_common_compat_broken(inputs)
	if (locale === "ja") return ja_common_compat_broken(inputs)
	return en_common_compat_broken(inputs)
});
