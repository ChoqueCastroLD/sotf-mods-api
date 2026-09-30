/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_TextInputs */

const en_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in with your fingerprint, face or device lock instead of a password. A passkey can also be your second step.`)
};

const es_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión con tu huella, tu cara o el bloqueo del dispositivo en lugar de una contraseña. Una clave de acceso también puede ser tu segundo paso.`)
};

const de_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich statt mit Passwort mit Fingerabdruck, Gesicht oder Gerätesperre an. Ein Passkey kann auch dein zweiter Schritt sein.`)
};

const fr_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous avec votre empreinte, votre visage ou le verrouillage de l’appareil plutôt qu’avec un mot de passe. Une clé d’accès peut aussi servir de seconde étape.`)
};

const it_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi con impronta, volto o blocco del dispositivo invece della password. Una passkey può essere anche il tuo secondo passaggio.`)
};

const nl_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in met je vingerafdruk, gezicht of apparaatvergrendeling in plaats van een wachtwoord. Een passkey kan ook je tweede stap zijn.`)
};

const pl_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loguj się odciskiem palca, twarzą lub blokadą urządzenia zamiast hasła. Klucz dostępu może być też Twoim drugim krokiem.`)
};

const pt_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre com sua digital, rosto ou bloqueio do dispositivo em vez de uma senha. Uma chave de acesso também pode ser sua segunda etapa.`)
};

const ru_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Входите по отпечатку, лицу или блокировке устройства вместо пароля. Ключ доступа может быть и вторым шагом.`)
};

const sv_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in med fingeravtryck, ansikte eller enhetslås istället för lösenord. En passkey kan också vara ditt andra steg.`)
};

const tr_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre yerine parmak izin, yüzün veya cihaz kilidinle giriş yap. Geçiş anahtarı ikinci adımın da olabilir.`)
};

const zh_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用指纹、面部或设备锁代替密码登录。通行密钥也可以作为你的第二步验证。`)
};

const ja_settings_passkeys_text = /** @type {(inputs: Settings_Passkeys_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードの代わりに指紋、顔、端末のロックでログインできます。パスキーは2段階目としても使えます。`)
};

/**
* | output |
* | --- |
* | "Sign in with your fingerprint, face or device lock instead of a password. A passkey can also be your second step." |
*
* @param {Settings_Passkeys_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_text = /** @type {((inputs?: Settings_Passkeys_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_text(inputs)
	if (locale === "de") return de_settings_passkeys_text(inputs)
	if (locale === "fr") return fr_settings_passkeys_text(inputs)
	if (locale === "it") return it_settings_passkeys_text(inputs)
	if (locale === "nl") return nl_settings_passkeys_text(inputs)
	if (locale === "pl") return pl_settings_passkeys_text(inputs)
	if (locale === "pt") return pt_settings_passkeys_text(inputs)
	if (locale === "ru") return ru_settings_passkeys_text(inputs)
	if (locale === "sv") return sv_settings_passkeys_text(inputs)
	if (locale === "tr") return tr_settings_passkeys_text(inputs)
	if (locale === "zh") return zh_settings_passkeys_text(inputs)
	if (locale === "ja") return ja_settings_passkeys_text(inputs)
	return en_settings_passkeys_text(inputs)
});
