/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_Age_HintInputs */

const en_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Days since the account was created. Use 0 for no limit.`)
};

const es_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Días desde que se creó la cuenta. Usa 0 para no limitar.`)
};

const de_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tage seit der Kontoerstellung. 0 bedeutet keine Begrenzung.`)
};

const fr_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jours depuis la création du compte. Mettez 0 pour aucune limite.`)
};

const it_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorni dalla creazione dell’account. Usa 0 per nessun limite.`)
};

const nl_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagen sinds het account is aangemaakt. Gebruik 0 voor geen limiet.`)
};

const pl_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dni od utworzenia konta. 0 oznacza brak limitu.`)
};

const pt_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dias desde a criação da conta. Use 0 para não limitar.`)
};

const ru_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дней с создания аккаунта. 0 значит без ограничений.`)
};

const sv_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagar sedan kontot skapades. Använd 0 för ingen gräns.`)
};

const tr_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabın oluşturulmasından bu yana geçen gün. Sınırsız için 0 yazın.`)
};

const zh_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号创建后的天数。填 0 表示不限制。`)
};

const ja_jams_editor_min_age_hint = /** @type {(inputs: Jams_Editor_Min_Age_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント作成からの日数です。0 なら制限なしです。`)
};

/**
* | output |
* | --- |
* | "Days since the account was created. Use 0 for no limit." |
*
* @param {Jams_Editor_Min_Age_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_age_hint = /** @type {((inputs?: Jams_Editor_Min_Age_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_Age_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_age_hint(inputs)
	if (locale === "de") return de_jams_editor_min_age_hint(inputs)
	if (locale === "fr") return fr_jams_editor_min_age_hint(inputs)
	if (locale === "it") return it_jams_editor_min_age_hint(inputs)
	if (locale === "nl") return nl_jams_editor_min_age_hint(inputs)
	if (locale === "pl") return pl_jams_editor_min_age_hint(inputs)
	if (locale === "pt") return pt_jams_editor_min_age_hint(inputs)
	if (locale === "ru") return ru_jams_editor_min_age_hint(inputs)
	if (locale === "sv") return sv_jams_editor_min_age_hint(inputs)
	if (locale === "tr") return tr_jams_editor_min_age_hint(inputs)
	if (locale === "zh") return zh_jams_editor_min_age_hint(inputs)
	if (locale === "ja") return ja_jams_editor_min_age_hint(inputs)
	return en_jams_editor_min_age_hint(inputs)
});
