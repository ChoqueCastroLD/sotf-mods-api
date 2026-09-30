/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Backpack_Notify_OnInputs */

const en_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You’ll get a signal when ${i?.mod} updates`)
};

const es_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recibirás una señal cuando ${i?.mod} se actualice`)
};

const de_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du bekommst ein Signal, wenn ${i?.mod} ein Update erhält`)
};

const fr_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous recevrez un signal quand ${i?.mod} sera mis à jour`)
};

const it_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riceverai un segnale quando ${i?.mod} si aggiorna`)
};

const nl_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je krijgt een signaal als ${i?.mod} wordt bijgewerkt`)
};

const pl_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dostaniesz sygnał, gdy ${i?.mod} się zaktualizuje`)
};

const pt_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você vai receber um sinal quando ${i?.mod} for atualizado`)
};

const ru_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы получите сигнал, когда ${i?.mod} обновится`)
};

const sv_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du får en signal när ${i?.mod} uppdateras`)
};

const tr_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} güncellendiğinde sinyal alacaksın`)
};

const zh_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 更新时你会收到信号`)
};

const ja_me_backpack_notify_on = /** @type {(inputs: Me_Backpack_Notify_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が更新されたらシグナルが届きます`)
};

/**
* | output |
* | --- |
* | "You’ll get a signal when {mod} updates" |
*
* @param {Me_Backpack_Notify_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_notify_on = /** @type {((inputs: Me_Backpack_Notify_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Notify_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_notify_on(inputs)
	if (locale === "de") return de_me_backpack_notify_on(inputs)
	if (locale === "fr") return fr_me_backpack_notify_on(inputs)
	if (locale === "it") return it_me_backpack_notify_on(inputs)
	if (locale === "nl") return nl_me_backpack_notify_on(inputs)
	if (locale === "pl") return pl_me_backpack_notify_on(inputs)
	if (locale === "pt") return pt_me_backpack_notify_on(inputs)
	if (locale === "ru") return ru_me_backpack_notify_on(inputs)
	if (locale === "sv") return sv_me_backpack_notify_on(inputs)
	if (locale === "tr") return tr_me_backpack_notify_on(inputs)
	if (locale === "zh") return zh_me_backpack_notify_on(inputs)
	if (locale === "ja") return ja_me_backpack_notify_on(inputs)
	return en_me_backpack_notify_on(inputs)
});
