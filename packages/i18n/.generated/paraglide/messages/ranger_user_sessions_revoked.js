/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_User_Sessions_RevokedInputs */

const en_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No session was open.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} session ended.`);
	return /** @type {LocalizedString} */ (`${count__number} sessions ended.`)
	
};

const es_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No había ninguna sesión abierta.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se cerró ${count__number} sesión.`);
	return /** @type {LocalizedString} */ (`Se cerraron ${count__number} sesiones.`)
	
};

const de_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Es war keine Sitzung offen.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Sitzung beendet.`);
	return /** @type {LocalizedString} */ (`${count__number} Sitzungen beendet.`)
	
};

const fr_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucune session n’était ouverte.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} session fermée.`);
	return /** @type {LocalizedString} */ (`${count__number} sessions fermées.`)
	
};

const it_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessuna sessione era aperta.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sessione chiusa.`);
	return /** @type {LocalizedString} */ (`${count__number} sessioni chiuse.`)
	
};

const nl_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Er was geen sessie open.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sessie beëindigd.`);
	return /** @type {LocalizedString} */ (`${count__number} sessies beëindigd.`)
	
};

const pl_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nie było otwartej sesji.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Zakończono ${count__number} sesję.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Zakończono ${count__number} sesje.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Zakończono ${count__number} sesji.`);
	return /** @type {LocalizedString} */ (`Zakończono ${count__number} sesji.`)
	
};

const pt_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhuma sessão estava aberta.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sessão encerrada.`);
	return /** @type {LocalizedString} */ (`${count__number} sessões encerradas.`)
	
};

const ru_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Открытых сеансов не было.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Завершён ${count__number} сеанс.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Завершено ${count__number} сеанса.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Завершено ${count__number} сеансов.`);
	return /** @type {LocalizedString} */ (`Завершено ${count__number} сеанса.`)
	
};

const sv_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ingen session var öppen.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} session avslutades.`);
	return /** @type {LocalizedString} */ (`${count__number} sessioner avslutades.`)
	
};

const tr_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Açık oturum yoktu.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} oturum sonlandırıldı.`);
	return /** @type {LocalizedString} */ (`${count__number} oturum sonlandırıldı.`)
	
};

const zh_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有已打开的会话。`);
	return /** @type {LocalizedString} */ (`已结束 ${count__number} 个会话。`)
	
};

const ja_ranger_user_sessions_revoked = /** @type {(inputs: Ranger_User_Sessions_RevokedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`開いているセッションはありませんでした。`);
	return /** @type {LocalizedString} */ (`${count__number} 件のセッションを終了しました。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No session was open." |
* | * | "one" | "{count__number} session ended." |
* | * | * | "{count__number} sessions ended." |
*
* @param {Ranger_User_Sessions_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_sessions_revoked = /** @type {((inputs: Ranger_User_Sessions_RevokedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Sessions_RevokedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_sessions_revoked(inputs)
	if (locale === "de") return de_ranger_user_sessions_revoked(inputs)
	if (locale === "fr") return fr_ranger_user_sessions_revoked(inputs)
	if (locale === "it") return it_ranger_user_sessions_revoked(inputs)
	if (locale === "nl") return nl_ranger_user_sessions_revoked(inputs)
	if (locale === "pl") return pl_ranger_user_sessions_revoked(inputs)
	if (locale === "pt") return pt_ranger_user_sessions_revoked(inputs)
	if (locale === "ru") return ru_ranger_user_sessions_revoked(inputs)
	if (locale === "sv") return sv_ranger_user_sessions_revoked(inputs)
	if (locale === "tr") return tr_ranger_user_sessions_revoked(inputs)
	if (locale === "zh") return zh_ranger_user_sessions_revoked(inputs)
	if (locale === "ja") return ja_ranger_user_sessions_revoked(inputs)
	return en_ranger_user_sessions_revoked(inputs)
});
