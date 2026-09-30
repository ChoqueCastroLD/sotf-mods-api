/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_Sessions_Confirm_Others_TextInputs */

const en_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} other session will end. This browser stays signed in.`);
	return /** @type {LocalizedString} */ (`${count__number} other sessions will end. This browser stays signed in.`)
	
};

const es_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se cerrará ${count__number} sesión más. Este navegador sigue con la sesión iniciada.`);
	return /** @type {LocalizedString} */ (`Se cerrarán ${count__number} sesiones más. Este navegador sigue con la sesión iniciada.`)
	
};

const de_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} andere Sitzung wird beendet. Dieser Browser bleibt angemeldet.`);
	return /** @type {LocalizedString} */ (`${count__number} andere Sitzungen werden beendet. Dieser Browser bleibt angemeldet.`)
	
};

const fr_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} autre session va se terminer. Ce navigateur reste connecté.`);
	return /** @type {LocalizedString} */ (`${count__number} autres sessions vont se terminer. Ce navigateur reste connecté.`)
	
};

const it_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Verrà chiusa ${count__number} altra sessione. Questo browser resta connesso.`);
	return /** @type {LocalizedString} */ (`Verranno chiuse ${count__number} altre sessioni. Questo browser resta connesso.`)
	
};

const nl_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} andere sessie wordt beëindigd. Deze browser blijft ingelogd.`);
	return /** @type {LocalizedString} */ (`${count__number} andere sessies worden beëindigd. Deze browser blijft ingelogd.`)
	
};

const pl_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zakończy się ${count__number} inna sesja. Ta przeglądarka pozostanie zalogowana.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zakończą się ${count__number} inne sesje. Ta przeglądarka pozostanie zalogowana.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zakończy się ${count__number} innych sesji. Ta przeglądarka pozostanie zalogowana.`);
	return /** @type {LocalizedString} */ (`Zakończy się ${count__number} innej sesji. Ta przeglądarka pozostanie zalogowana.`)
	
};

const pt_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} outra sessão será encerrada. Este navegador continua conectado.`);
	return /** @type {LocalizedString} */ (`${count__number} outras sessões serão encerradas. Este navegador continua conectado.`)
	
};

const ru_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Будет завершена ${count__number} другая сессия. В этом браузере вход сохранится.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Будут завершены ${count__number} другие сессии. В этом браузере вход сохранится.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Будут завершены ${count__number} других сессий. В этом браузере вход сохранится.`);
	return /** @type {LocalizedString} */ (`Будет завершено ${count__number} другой сессии. В этом браузере вход сохранится.`)
	
};

const sv_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} annan session avslutas. Den här webbläsaren förblir inloggad.`);
	return /** @type {LocalizedString} */ (`${count__number} andra sessioner avslutas. Den här webbläsaren förblir inloggad.`)
	
};

const tr_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} diğer oturum sonlandırılacak. Bu tarayıcıda oturum açık kalır.`);
	return /** @type {LocalizedString} */ (`${count__number} diğer oturum sonlandırılacak. Bu tarayıcıda oturum açık kalır.`)
	
};

const zh_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`将结束另外 ${count__number} 个会话。此浏览器会保持登录。`)
};

const ja_settings_sessions_confirm_others_text = /** @type {(inputs: Settings_Sessions_Confirm_Others_TextInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`他の ${count__number} 件のセッションが終了します。このブラウザーはログインしたままです。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} other session will end. This browser stays signed in." |
* | * | "{count__number} other sessions will end. This browser stays signed in." |
*
* @param {Settings_Sessions_Confirm_Others_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_confirm_others_text = /** @type {((inputs: Settings_Sessions_Confirm_Others_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_Others_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_confirm_others_text(inputs)
	if (locale === "de") return de_settings_sessions_confirm_others_text(inputs)
	if (locale === "fr") return fr_settings_sessions_confirm_others_text(inputs)
	if (locale === "it") return it_settings_sessions_confirm_others_text(inputs)
	if (locale === "nl") return nl_settings_sessions_confirm_others_text(inputs)
	if (locale === "pl") return pl_settings_sessions_confirm_others_text(inputs)
	if (locale === "pt") return pt_settings_sessions_confirm_others_text(inputs)
	if (locale === "ru") return ru_settings_sessions_confirm_others_text(inputs)
	if (locale === "sv") return sv_settings_sessions_confirm_others_text(inputs)
	if (locale === "tr") return tr_settings_sessions_confirm_others_text(inputs)
	if (locale === "zh") return zh_settings_sessions_confirm_others_text(inputs)
	if (locale === "ja") return ja_settings_sessions_confirm_others_text(inputs)
	return en_settings_sessions_confirm_others_text(inputs)
});
