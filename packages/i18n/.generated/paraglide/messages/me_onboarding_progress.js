/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Me_Onboarding_ProgressInputs */

const en_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("en", i?.done, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} of ${total__number} done`)
};

const es_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("es", i?.done, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} de ${total__number} hechos`)
};

const de_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("de", i?.done, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} von ${total__number} erledigt`)
};

const fr_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("fr", i?.done, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} sur ${total__number} terminées`)
};

const it_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("it", i?.done, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} di ${total__number} completati`)
};

const nl_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("nl", i?.done, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} van ${total__number} klaar`)
};

const pl_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("pl", i?.done, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`Ukończono ${done__number} z ${total__number}`)
};

const pt_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("pt", i?.done, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} de ${total__number} concluídos`)
};

const ru_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("ru", i?.done, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`Выполнено ${done__number} из ${total__number}`)
};

const sv_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("sv", i?.done, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`${done__number} av ${total__number} klara`)
};

const tr_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("tr", i?.done, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} adımdan ${done__number} tanesi tamam`)
};

const zh_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("zh", i?.done, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`已完成 ${done__number}/${total__number}`)
};

const ja_me_onboarding_progress = /** @type {(inputs: Me_Onboarding_ProgressInputs) => LocalizedString} */ (i) => {
	const done__number = registry.number("ja", i?.done, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} 件中 ${done__number} 件完了`)
};

/**
* | output |
* | --- |
* | "{done__number} of {total__number} done" |
*
* @param {Me_Onboarding_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_progress = /** @type {((inputs: Me_Onboarding_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_progress(inputs)
	if (locale === "de") return de_me_onboarding_progress(inputs)
	if (locale === "fr") return fr_me_onboarding_progress(inputs)
	if (locale === "it") return it_me_onboarding_progress(inputs)
	if (locale === "nl") return nl_me_onboarding_progress(inputs)
	if (locale === "pl") return pl_me_onboarding_progress(inputs)
	if (locale === "pt") return pt_me_onboarding_progress(inputs)
	if (locale === "ru") return ru_me_onboarding_progress(inputs)
	if (locale === "sv") return sv_me_onboarding_progress(inputs)
	if (locale === "tr") return tr_me_onboarding_progress(inputs)
	if (locale === "zh") return zh_me_onboarding_progress(inputs)
	if (locale === "ja") return ja_me_onboarding_progress(inputs)
	return en_me_onboarding_progress(inputs)
});
