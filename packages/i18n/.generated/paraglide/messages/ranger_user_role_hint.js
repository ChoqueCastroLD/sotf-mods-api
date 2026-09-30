/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Role_HintInputs */

const en_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admins are granted from the command line only.`)
};

const es_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El rol de admin solo se concede desde la línea de comandos.`)
};

const de_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admins werden nur über die Kommandozeile ernannt.`)
};

const fr_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le rôle admin ne s’accorde qu’en ligne de commande.`)
};

const it_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il ruolo admin si assegna solo da riga di comando.`)
};

const nl_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admins worden alleen via de opdrachtregel aangesteld.`)
};

const pl_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rolę administratora nadaje się tylko z wiersza poleceń.`)
};

const pt_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O papel de admin só é concedido pela linha de comando.`)
};

const ru_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Роль администратора выдаётся только из командной строки.`)
};

const sv_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admins utses bara via kommandoraden.`)
};

const tr_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetici rolü yalnızca komut satırından verilir.`)
};

const zh_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理员角色只能通过命令行授予。`)
};

const ja_ranger_user_role_hint = /** @type {(inputs: Ranger_User_Role_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者ロールはコマンドラインからのみ付与できます。`)
};

/**
* | output |
* | --- |
* | "Admins are granted from the command line only." |
*
* @param {Ranger_User_Role_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_role_hint = /** @type {((inputs?: Ranger_User_Role_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Role_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_role_hint(inputs)
	if (locale === "de") return de_ranger_user_role_hint(inputs)
	if (locale === "fr") return fr_ranger_user_role_hint(inputs)
	if (locale === "it") return it_ranger_user_role_hint(inputs)
	if (locale === "nl") return nl_ranger_user_role_hint(inputs)
	if (locale === "pl") return pl_ranger_user_role_hint(inputs)
	if (locale === "pt") return pt_ranger_user_role_hint(inputs)
	if (locale === "ru") return ru_ranger_user_role_hint(inputs)
	if (locale === "sv") return sv_ranger_user_role_hint(inputs)
	if (locale === "tr") return tr_ranger_user_role_hint(inputs)
	if (locale === "zh") return zh_ranger_user_role_hint(inputs)
	if (locale === "ja") return ja_ranger_user_role_hint(inputs)
	return en_ranger_user_role_hint(inputs)
});
