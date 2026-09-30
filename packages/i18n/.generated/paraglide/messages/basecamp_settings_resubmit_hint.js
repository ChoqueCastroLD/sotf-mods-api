/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Resubmit_HintInputs */

const en_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send it back to the Ranger Station once you made the requested changes.`)
};

const es_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envíalo de nuevo al puesto de guardabosques cuando hayas hecho los cambios pedidos.`)
};

const de_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut an die Rangerstation senden, sobald die erbetenen Änderungen gemacht sind.`)
};

const fr_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le renvoyer au poste des rangers une fois les modifications demandées faites.`)
};

const it_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rinviala alla stazione dei ranger dopo aver fatto le modifiche richieste.`)
};

const nl_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuur hem terug naar de rangerpost zodra de gevraagde wijzigingen klaar zijn.`)
};

const pl_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij go ponownie na posterunek strażników po wprowadzeniu zmian.`)
};

const pt_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar de novo ao posto dos guardas depois de fazer as alterações pedidas.`)
};

const ru_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снова отправить на пост рейнджеров после внесения изменений.`)
};

const sv_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka tillbaka den till rangerstationen när de begärda ändringarna är gjorda.`)
};

const tr_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstenen değişiklikleri yaptıktan sonra Korucu İstasyonu'na yeniden gönder.`)
};

const zh_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成要求的修改后重新提交到护林站。`)
};

const ja_basecamp_settings_resubmit_hint = /** @type {(inputs: Basecamp_Settings_Resubmit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依頼された修正を終えたら、レンジャーステーションへ再提出します。`)
};

/**
* | output |
* | --- |
* | "Send it back to the Ranger Station once you made the requested changes." |
*
* @param {Basecamp_Settings_Resubmit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_resubmit_hint = /** @type {((inputs?: Basecamp_Settings_Resubmit_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Resubmit_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_resubmit_hint(inputs)
	if (locale === "de") return de_basecamp_settings_resubmit_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_resubmit_hint(inputs)
	if (locale === "it") return it_basecamp_settings_resubmit_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_resubmit_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_resubmit_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_resubmit_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_resubmit_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_resubmit_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_resubmit_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_resubmit_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_resubmit_hint(inputs)
	return en_basecamp_settings_resubmit_hint(inputs)
});
