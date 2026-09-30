/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_Sessions_CountInputs */

const en_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} active session`);
	return /** @type {LocalizedString} */ (`${count__number} active sessions`)
	
};

const es_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sesión activa`);
	return /** @type {LocalizedString} */ (`${count__number} sesiones activas`)
	
};

const de_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} aktive Sitzung`);
	return /** @type {LocalizedString} */ (`${count__number} aktive Sitzungen`)
	
};

const fr_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} session active`);
	return /** @type {LocalizedString} */ (`${count__number} sessions actives`)
	
};

const it_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sessione attiva`);
	return /** @type {LocalizedString} */ (`${count__number} sessioni attive`)
	
};

const nl_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} actieve sessie`);
	return /** @type {LocalizedString} */ (`${count__number} actieve sessies`)
	
};

const pl_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} aktywna sesja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} aktywne sesje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} aktywnych sesji`);
	return /** @type {LocalizedString} */ (`${count__number} aktywnej sesji`)
	
};

const pt_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sessão ativa`);
	return /** @type {LocalizedString} */ (`${count__number} sessões ativas`)
	
};

const ru_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} активная сессия`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} активные сессии`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} активных сессий`);
	return /** @type {LocalizedString} */ (`${count__number} активной сессии`)
	
};

const sv_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} aktiv session`);
	return /** @type {LocalizedString} */ (`${count__number} aktiva sessioner`)
	
};

const tr_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} etkin oturum`);
	return /** @type {LocalizedString} */ (`${count__number} etkin oturum`)
	
};

const zh_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个活跃会话`)
};

const ja_settings_sessions_count = /** @type {(inputs: Settings_Sessions_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`アクティブなセッション ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} active session" |
* | * | "{count__number} active sessions" |
*
* @param {Settings_Sessions_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_count = /** @type {((inputs: Settings_Sessions_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_count(inputs)
	if (locale === "de") return de_settings_sessions_count(inputs)
	if (locale === "fr") return fr_settings_sessions_count(inputs)
	if (locale === "it") return it_settings_sessions_count(inputs)
	if (locale === "nl") return nl_settings_sessions_count(inputs)
	if (locale === "pl") return pl_settings_sessions_count(inputs)
	if (locale === "pt") return pt_settings_sessions_count(inputs)
	if (locale === "ru") return ru_settings_sessions_count(inputs)
	if (locale === "sv") return sv_settings_sessions_count(inputs)
	if (locale === "tr") return tr_settings_sessions_count(inputs)
	if (locale === "zh") return zh_settings_sessions_count(inputs)
	if (locale === "ja") return ja_settings_sessions_count(inputs)
	return en_settings_sessions_count(inputs)
});
